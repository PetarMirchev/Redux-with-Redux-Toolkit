import './App.css';
import Navbar from "./components/navbar/Navbar";
import Leftbar from './components/leftbar/Leftbar';

function App() {
  return (
    <>     
        <Navbar/>
      <div className="App"> 
        <Leftbar/>
      </div>
    </>
  );
}

export default App;
