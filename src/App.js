import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mainpage from "./pages/Mainpage";
import Goodspage from './pages/Goodspage';
import Loginpage from './pages/Loginpage';
import Cartpage from './pages/Cartpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/openmarket' element={<Mainpage />} />
        <Route path='/goods/:id' element={<Goodspage />} />
        <Route path='/openmarket/login' element={<Loginpage />} />
        <Route path='/cart' element={<Cartpage />} />
      </Routes>
    </BrowserRouter>
  );
}
// -webkit-clip-path: polygon(52% 0, 52% 22%, 100% 22%, 100% 100%, 0 100%, 0 0);
// clip-path: polygon(52% 0, 52% 22%, 100% 22%, 100% 100%, 0 100%, 0 0);
export default App;
