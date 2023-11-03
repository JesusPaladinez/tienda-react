// importar paginas
import Home from './pages/Home.jsx';
import Perfil from './pages/Perfil.jsx';
import Login from './pages/Login.jsx';

// importar dependencias
import { BrowserRouter, useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  const router = useRoutes([
    {path:"/", element:<Home/>},
    {path:"/perfil", element:<Perfil/>},
    {path:"/login", element:<Login/>},

  ])

  return router;

}

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
