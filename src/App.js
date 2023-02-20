import './App.css';
import BasicCountDown from './components/BasicCountDown';
import WithMessage from './components/WithMessage';
import WithCompleteCondition from './components/WithCompleteCondition';

function App() {

  return (
    <div className="App">
      <h1>basic</h1>
      <BasicCountDown />
      <h1>With message</h1>
      <WithMessage />
      <h1>Custom Renderer with Completed Condition</h1>
      <WithCompleteCondition />
    </div >
  );
}

export default App;
