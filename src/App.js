import './App.css';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  return (
    <main>
      <Navbar/>
      <div className="container">
        <h1 className="mt-3 text-center">Welcome to the shopping cart!</h1>
        <Routes/>
      </div>
    </main>
  );
}

export default App;
