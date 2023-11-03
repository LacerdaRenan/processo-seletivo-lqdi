import './VivaUmaNovaExperiencia.css'
import Formulario from '../formulario/Formulario'

export default function VivaUmaNovaExperiencia() {
  return(
    <div className='vivaUmaNovaExperiencia'>
      <div className='vivaUmaNovaExperienciaTexto'>
        Viva uma nova experiência de comunicação integrada com foco nos resultados.

        <div className='vivaUmaNovaExperienciaTexto2'>
          Escreva-nos sobre o seu projeto
        </div>
      </div>
      <Formulario />
    </div>
  )
}