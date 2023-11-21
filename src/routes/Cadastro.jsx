import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../scss/Cadastro.scss'

function Cadastro() {

  //Hook useParams
  let {id} =useParams();

  //Hook useState

  const [novo, setNovo]= useState({
    id,
    nome:'',
    email:'',
    senha:''
  })
 

  let metodo ='post'
  if(id){
    metodo='put'
  }

  const handleChange = (e)=>{
    setNovo({...novo, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/usuarios/${id ? id:''}`,{
      method:metodo,
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(novo),
    }).then(()=>{
        alert('Cadastro feito')
        window.location= '/';
    });
  }

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/usuarios/${id}`)
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        setNovo(data)
      })
    }
  }, [id]);

  return(
  <>
    <div className='pedido'>
        <h1 className='titulocadastroPed titulo-login'>Cadastro</h1>
        <form className='dados bg-secondary' onSubmit={handleSubmit}>
            <input
            className='inputPed'
            type="text"
            name="nome"
            value={novo.nome}
            placeholder="Digite o nome"
            onChange={handleChange}
            />
            <input
            className='inputPed'
            type="text"
            name="email"
            value={novo.email}
            placeholder="Digite seu email"
            onChange={handleChange}
            />
            <input
            className='inputPed'
            type="text"
            name="senha"
            value={novo.senha}
            placeholder="Digite uma senha"
            onChange={handleChange}
            />
            <button className='botao' type="submit" onClick={handleSubmit}>Cadastrar</button>
        </form>
    </div>
    
  </>
  )
  
}

export default Cadastro;
