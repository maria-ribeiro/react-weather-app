import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <a href="https://github.com/maria-ribeiro/react-weather-app" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        </footer>
      </div>
    </div>
  );
}

export default App;