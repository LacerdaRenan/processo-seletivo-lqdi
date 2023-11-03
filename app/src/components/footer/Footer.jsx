import logo from '../../img/logo-lqdi-positivo_footer.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div style={{ marginTop:54 }}>
        <img src={ logo } alt="" />
      </div>

      <div className='footerText1' style={ { marginLeft: 423, marginRight:70, marginTop:54 } }>
        <p style={ { fontWeight:700 } }>Brasil</p>
        <p>Rua da Consolação, 4393º andar, Consolação São Paulo</p>
        <p>+55 11 3280-0283</p>
      </div>

      <div style={ { marginTop:54 } }>
        <div className='footerText1'>
          <p style={ { fontWeight:700 } }>Portugal</p>
          <p>Av. República Nº6 - 1º Andar Lisboa</p>
          <p>+351 916 029 443</p>
        </div>

        <div className='footerText1'>
          <p style={ { fontWeight:700 } }>Holanda</p>
          <p>Jasykoffstraat 631506AT ZaandamThe Netherlands</p>
          <p>+31 622 333 744</p>
        </div>
      </div>
    </div>
  )
}