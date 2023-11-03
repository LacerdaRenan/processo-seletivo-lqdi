import './ConstruimosEstrategias.css'
import img1 from '../../img/Rectangle109.png'
import img2 from '../../img/Rectangle110.png'
import img3 from '../../img/Rectangle111.png'
import img4 from '../../img/Rectangle112.png'

export default function ContruimosEstrategias() {
  return (
    <div className='component'>

      <div className='principal'>
        Construímos estratégias, design e tecnologia de ponta para o seu negócio
      </div>

      <div className='secundario'>
        Converse com nossa equipe sobre o seu projeto.
      </div>

      <button className='botaoverde'>Começar</button>


      <img className='img1' src={ img1 } alt="" />
      <img className='img2' src={ img2 } alt="" />
      <img className='img3' src={ img3 } alt="" />
      <img className='img4' src={ img4 } alt="" />

    </div>
  )
}