import './App.css';
import ResponsiveForm from './components/ResponsiveForm.js';
//import Image from 'react-bootstrap/Image';
import background from './img/dogadop.jpg';


const App = () => {


    return (
        <div className="App" style={{ backgroundImage: `url(${background})` }} fluid>        
            <ResponsiveForm/>        
        </div>
    );
}

export default App;
