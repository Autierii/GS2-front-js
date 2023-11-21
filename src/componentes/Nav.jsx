import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Nav.scss'


function Nav() {

    const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))

    return (
        <>

            <nav className='d-md-flex navfundo'>



                <Link to="/" className='text-decoration-none text-dark'><img className="img-nav" src="./src/images/LOGO_RC.jpg" alt="Logo" /></Link>

                <div className='usuarioNav' style={userLogado == null ? { display: "none" } : { display: "block" }}>
                    <p className='usuario'>{userLogado != null ? `Usuario Logado: ${userLogado.usuario}` : ""}</p>
                </div>


                <div className='ul ml-auto'>
                    <ul className='d-md-flex'>
                        <li className='btn btn-secondary'><Link to="/" className='text-decoration-none text-light'>Home</Link></li>
                        <li className='btn btn-secondary'><Link to="/Login" className='text-decoration-none text-light'>Login</Link></li>
                        <li className='btn btn-secondary'><Link to="/cadastro" className='text-decoration-none text-light'>Cadastro</Link></li>
                        <li className='btn btn-secondary'><Link to="/listarCadastro" className='text-decoration-none text-light'>Listar Cadastros</Link></li>
                    </ul>
                </div>



            </nav>
        </>
    )
}

export default Nav
