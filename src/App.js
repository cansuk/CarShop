import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { CarDetails } from './components/CarDetails';
import NotFound from './components/NotFound';

function App() {
  return <Router>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/notFound" element={<NotFound />} />
      <Route path="/details/:stock" element={<CarDetails />} />
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
