import { Component } from "react"
import Logo from './Logo'
import Carro from './Carro'
import GoogleLogin from 'react-google-login';

const styles={
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent:'space-between',
        position: 'relative',
        padding:'0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',

    }
}

const responseGoogle = (response) => {
    console.log(response);
  }

const handleLogin = async googleData => {
    console.log(googleData)
    const res = await fetch("http://localhost:5000/validargoogletoken", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
}

class Navbar extends Component {
    render(){
        const { carro,esCarroVisible,mostrarCarro } = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />
                <GoogleLogin
                    clientId="879157433796-0l5v66qccfk28n3o7ks0j0qfm4qs9srh.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
                />
                <Carro 
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar 