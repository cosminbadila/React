import logo from './logo.svg';
import './App.css';
import Salut from './components/salut';
import Masina from './components/Masina';
import Form from './components/Form';
import MyForm from './components/MyForm';




function App() {
  const carInfo = {name: 'Ford', model:'Mustang'};
  const obj ={name:'Alice', email:'alice@wonderland.gl', password: '123456', car: 'Minicooper', message: 'Hello from Wonderland'}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Salut nume='Dan' curs='React' />
        <Salut nume='Anca' curs='JavaScript' />
        <Masina car={carInfo} />


      </header>
        <Form />
        <MyForm {...obj} />


    </div>
  );
}

export default App;
