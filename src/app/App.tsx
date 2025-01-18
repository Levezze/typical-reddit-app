import { Outlet } from 'react-router-dom';
import '../App.css';
// import AppRoutes from './routes';

function App() {
  return (
    <>
      <header>
        <h1>Hello</h1>
      </header>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App;
