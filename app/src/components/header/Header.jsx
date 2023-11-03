import logo from '../../img/logo-lqdi-positivo1.png'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>  
      <img className='logo' src={logo} alt="" />
      <a className='texto' href='/'>Agende uma reunião conosco</a>
      <button className='botaopreto'>Começar</button>
    </div>
  ) 
}