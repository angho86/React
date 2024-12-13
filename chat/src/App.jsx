import { useState } from 'react'
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import LoggedPage from './components/LogedPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div>
          <Header name="Svecias" />
          <Login />
        </div>
    </>
  )
}

export default App
