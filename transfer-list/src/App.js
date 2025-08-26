
import './App.css';
import TransferList from './TransferList';
import { items } from './data';

function App() {
  return (
    <div className="App">
      <TransferList initialItems={items}/>
    </div>
  );
}

export default App;
