import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Weather/>
        <footer>
          <a href="https://github.com/maria-ribeiro/react-weather-app" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
        </footer>
      </div>
    </div>
  );
}

export default App;