import './css/App.css';
import ResponsiveForm from './components/ResponsiveForm.js';
import background from './img/dogadop.jpg';


const App = () => {
    
    return (
        <div className="App" style={{ backgroundImage: `url(${background})` }} fluid>        
            <ResponsiveForm/>        
        </div>
    );
}

export default App;
