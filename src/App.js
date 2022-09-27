import './App.css';
//import FormOfFrame from './components/FormOfFrame';
import ResponsiveForm from './components/ResponsiveForm';

const App = () => {
    const color1 = "#322F3D"
    const color2 = "#4B5D67"

    return (
        <div className="App" style={{background: `linear-gradient( 135deg, ${color1} 0%, ${color2} 100%)`}}>   
            <ResponsiveForm/>     
        </div>
    );
}

export default App;
