import './App.css';
//import FormOfFrame from './components/FormOfFrame';
import ResponsiveForm from './components/ResponsiveForm.js';
import background from './img/adoptionDog.jpg'


const App = () => {
    /*
    const color1 = "#322F3D"
    const color2 = "#4B5D67"
    style={{background: `linear-gradient( 135deg, ${color1} 0%, ${color2} 100%)`}}
    */
    return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>        
            <ResponsiveForm/>        
        </div>
    );
}

export default App;
