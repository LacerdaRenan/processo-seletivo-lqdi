import img1 from '../../img/Rectangle113.png'
import img2 from '../../img/Rectangle114.png'
import RecebaNossosArtigos from '../recebaNossosArtigos/RecebaNossosArtigos'
import './Secao2.css'

export default function Secao2() {
  let components = [
    {
      img: img1,
      title: 'Por que é importante ter um site de qualidade?',
      text: 'Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...',
      link: '/'
    },
    {
      img: img2,
      title: '6 dicas para trabalhar com marketing digital com verba limitada',
      text: 'Um site de qualidade passou a ser um dos meios de exposição de marca mais eficientes no ambiente online. Ele funciona como uma espécie de cartão...',
      link: '/'
    }
  ]

  return (
    <div className='secao2'>
      {components.map((component, i) => (
        <div key={ i } className='secao2componente'>
          <img src={ component.img } alt="" />
          <p className='secao2title'>{ component.title }</p>
          <p className='secao2text'>{ component.text }</p>
          <div className='secao2link'>
            <a href={ component.link }>Ir para o artigo</a>
          </div>
        </div>
      ))}
      <RecebaNossosArtigos />
    </div>
  )
}