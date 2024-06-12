import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/SignUp.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
        {/* <Login /> */}
      </main>
    </>
  );
}

export default App;
