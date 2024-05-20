import logo from './logo.svg';
import './App.css';
import MarvelService from './services/MarvelService';

function App() {

  const marvelService = new MarvelService();

  marvelService.getAllCharacters().then(res => console.log("getAllCharacters: ", res));
  marvelService.getCharacterById(1009146).then(res => console.log("getCharacterById: ", res));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
