import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <br></br>
      <div className="App">

        <Home></Home>
      </div>
    </div>
  );
}

export default App;
