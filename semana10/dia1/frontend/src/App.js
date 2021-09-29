import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
import axios from 'axios'
import GoogleLogin from 'react-google-login';
import { CulqiProvider, Culqi } from 'react-culqi';

class App extends Component {
  state = {
    productos : [
      {nombre: 'Samsung Galaxy A20S',precio:900,imagen:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629321307/bjaqxmhi4k5qj9hopzji.jpg'},
      {nombre: 'LAPTOP HP 5000',precio:3500,imagen:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629326341/yj9qdcywfvtx92pbblor.webp'},
      {nombre: 'PC GAMER TEROS',precio:2000,imagen:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629317263/dyefuxgv6vfndr5jauok.jpg'},
    ],
    carro : [
      //{name: 'Samsung Galaxy A20S',price:900,img:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629321307/bjaqxmhi4k5qj9hopzji.jpg', cantidad: 1},
    ],
    esCarroVisible: false,
    usuario: 'cesar',
    email: '',
    foto: '',
    total:20
  }

  

  componentDidMount(){
    axios.get('http://localhost:5000/productos')
    .then(res=> {
      console.log(res.data.content)
      this.setState({productos : res.data.content})
    })
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.nombre === producto.nombre)) {
      const newCarro = carro.map(x => x.nombre === producto.nombre
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  handleLogin = (googleData) => {
    console.log(googleData)
    let datos = {
      token: googleData.tokenId
    }
    axios.post('http://localhost:5000/clientes/auth/google',datos)
    .then(res=> {
      console.log(res.data.content.nombre)
      this.setState({usuario: res.data.content.nombre})
      this.setState({email: res.data.content.email})
      this.setState({foto: res.data.content.foto})
    })
  }

  registrarPedido = (event) => {
    event.preventDefault()
    const { carro } = this.state
    console.log("registrando pedido...")
    let datos = {
      cliente:{
          nombre : this.state.usuario,
          email : this.state.email
      },
      productos: carro,
      total : 20,
      estado: 'pendiente'
    }
    axios.post('http://localhost:5000/pedidos',datos)
    .then(res => {
        console.log(res.data.status)
    })
  }

  registrarPedidoPagado = () => {
    const { carro } = this.state
    console.log("registrando pedido...")
    let datos = {
      cliente:{
          nombre : this.state.usuario,
          email : this.state.email
      },
      productos: carro,
      total : 20,
      estado: 'pagado'
    }
    axios.post('http://localhost:5000/pedidos',datos)
    .then(res => {
        console.log(res.data.status)
    })
  }

  render(){
    //console.log(this.state.carro)
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <GoogleLogin
                    clientId="879157433796-0l5v66qccfk28n3o7ks0j0qfm4qs9srh.apps.googleusercontent.com"
                    buttonText="ACCEDER CON GOOGLE"
                    onSuccess={this.handleLogin}
                    onFailure={this.handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
          <hr />
          <h1>PEDIDO</h1>
          <form onSubmit={this.registrarPedido}>
            <p>
              Nombre : <input type="text" value={this.state.usuario}/> 
              Email : <input type="text" value={this.state.email} />
              <input type="submit"/>
            </p>
          </form>
          <CulqiProvider
            publicKey="pk_test_e9663909b137a3f1"
            onToken={token =>{
              this.registrarPedidoPagado()
              }
            }
            onError={error => {
              console.log("pago invalido")
            }}
          >
            <Culqi>
              {({ openCulqi, setAmount, amount }) => {
                return <button onClick={openCulqi}>PAGAR</button>;
              }}
            </Culqi>
          </CulqiProvider>
        </Layout>
      </div>
    )
  }
}



export default App;
