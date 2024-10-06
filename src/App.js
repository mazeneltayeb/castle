import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './nav/Navbar';
import { Route, Routes } from 'react-router';
import Home from './home/home';
import Books from './books/books';

function App() {
 
  return (
      <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="books" element={<Books/>}/>
      </Routes>
      </>
  );
}

export default App;
