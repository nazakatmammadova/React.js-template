import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
