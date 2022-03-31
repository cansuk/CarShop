import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CarDetails from './components/CarDetails';
import NotFound from './components/NotFound';
import Purchase from './components/Purchase';
import Header from './components/Header';
import { Liner } from './styled-components/Liner';
import { useSelector } from 'react-redux';

function App() {

  return <Router>
    <Header />

    <Liner />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/notFound" element={<NotFound />} />
      <Route path="/details/:stock" element={<CarDetails />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/orders" element={<Purchase />} />
      <Route path="/sell" element={<Purchase />} />
      <Route
        path="*"
        element={
          <NotFound />
        }
      />
    </Routes>

  </Router>
}

export default App;
