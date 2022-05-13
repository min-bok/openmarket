import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mainpage from "./pages/Mainpage";
import Goodspage from './pages/Goodspage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/openmarket' element={<Mainpage />} />
        <Route path='/goods/:id' element={<Goodspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
