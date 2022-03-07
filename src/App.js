import './styles/App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Info from './components/Info';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Buttons />
        <Info />
      </div>
    </div>
  );
}

export default App;
