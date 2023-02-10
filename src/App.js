import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContainerLayout from './layout/ContainerLayout';
import HomePageLayout from './layout/HomePageLayout';
import Donate from './pages/Dontate';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PageChat from './pages/PageChat';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePageLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='/chat' element={<ContainerLayout />}>
        <Route index element={<PageChat />} />
      </Route>
      <Route path='donateme' element={<Donate />}/>
      <Route path='signin' element={<Login />}/>
      <Route path='error' element={<ErrorPage />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
