// My goal here was not to match the image, simply to practice creating the components
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

function App() {
  return (
    <div style={{
      height: "500px",
      width: "900px",
      backgroundColor: "gray",
      padding: "15px",
    }}>
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
