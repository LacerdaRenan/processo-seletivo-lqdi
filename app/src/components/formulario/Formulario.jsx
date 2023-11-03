import './Formulario.css'

export default function Formulario() {
  return (
    <form  className='formulario' action="http://localhost:8000/api/cadastrar-email-cliente" method='POST'>
        <label htmlFor="nome">Seu nome (requerido)</label>
        <input className='formularioInput1' type="text" name="nome" id="nome" />

        <label htmlFor="email">Seu E-mail (requerido)</label>
        <input className='formularioInput1' type="email" name="email" id="email" />

        <label htmlFor="">Assunto</label>
        <input className='formularioInput1' type="text" name="assunto" id="assunto"/>

        <label htmlFor="mensagem">Mensagem</label>
        <input className='formularioInput2' type="text" name="mensagem" id="mensagem" />

        <p className='labelInput3' >Anexe um documento explicando seu projeto</p>
        <div className='formularioInput3'>
          <button>
            <label htmlFor="doc">Escolher Arquivo</label>
          </button>
          <p>Nenhum arquivo escolhido</p>
          <input type="file" name="doc" id="doc" />
        </div>

        <input type="submit" value="Enviar" />
    </form>
  )
}