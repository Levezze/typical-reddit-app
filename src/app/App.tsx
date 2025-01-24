import { Outlet } from 'react-router-dom';
import '../styles/App.scss';
import Header from './components/Header/Header';
// import AppRoutes from './routes';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
