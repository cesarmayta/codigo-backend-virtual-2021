import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'



class App extends Component {
  state = {
    productos : [
      {name: 'Samsung Galaxy A20S',price:900,img:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629321307/bjaqxmhi4k5qj9hopzji.jpg'},
      {name: 'LAPTOP HP 5000',price:3500,img:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629326341/yj9qdcywfvtx92pbblor.webp'},
      {name: 'PC GAMER TEROS',price:2000,img:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629317263/dyefuxgv6vfndr5jauok.jpg'},
    ],
    carro : [
      //{name: 'Samsung Galaxy A20S',price:900,img:'https://res.cloudinary.com/dd9ad40qm/image/upload/v1629321307/bjaqxmhi4k5qj9hopzji.jpg', cantidad: 1},
    ],
    esCarroVisible: false,

  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
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

  render(){
    //console.log(this.state.carro)
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}



export default App;
