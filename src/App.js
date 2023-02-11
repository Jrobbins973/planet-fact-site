import logo from './logo.svg';
import './App.css';
import planetBackground from './starter-code/assets/background-stars.svg'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <img className= 'planet-background' src={planetBackground}/>
      <Header />
        
    </div>
  );
}

export default App;
