import './App.css';
import Navbar from "./components/navbar/Navbar";
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from "./components/rightbar/Rightbar";
import Update from './components/update/Update';

function App() {
  return (
    <>     
        <Navbar/>
      <div className="App"> 
        <Leftbar/>
        <Update/>
        <Rightbar/>
      </div>
    </>
  );
}

export default App;
