import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Detailpage from './pages/Detailpage';
import MainPage from './pages/Mainpage';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/openmarket' element={<MainPage />}/>
        <Route path='/goods/:id' element={<Detailpage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
