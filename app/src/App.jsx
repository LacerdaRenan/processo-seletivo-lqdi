import './App.css';
import Header from './components/header/Header';
import ContruimosEstrategias from './components/contruimosEstrategias/ConstruimosEstrategias';
import Secao2 from './components/secao2/Secao2';
import VivaUmaNovaExperiencia from './components/vivaUmaNovaExperiencia/VivaUmaNovaExperiencia';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <ContruimosEstrategias />
      <Secao2 />
      <VivaUmaNovaExperiencia />
      <Footer />
    </div>
  );
}

export default App;
