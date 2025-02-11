import { Outlet } from 'react-router-dom';
import '../styles/App.scss';
import Header from './components/Header/Header';

function App() {
  console.log("DEBUG - Redirect URI:", import.meta.env.VITE_REDIRECT_URI);
  console.log("DEBUG - Mode:", import.meta.env.MODE);
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
