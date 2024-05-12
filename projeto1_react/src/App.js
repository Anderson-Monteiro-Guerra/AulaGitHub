import './App.css';
import {Button, Title} from './components';

function App() {
  return (
    <div className="App">
      <Title>Hello word !</Title>
      <Button title={'clica Aqui'} onClick={() => alert("clicou")}/>
    </div>

  );
}

export default App;
