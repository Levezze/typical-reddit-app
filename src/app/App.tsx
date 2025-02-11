import { Outlet } from 'react-router-dom';
import '../styles/App.scss';
import Header from './components/Header/Header';

function App() {
  console.log("Redirect URI:", import.meta.env.VITE_REDIRECT_URI);

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
