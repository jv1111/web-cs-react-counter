import './App.css';
import BasicCountDown from './components/BasicCountDown';
import WithMessage from './components/WithMessage';
import WithCompleteCondition from './components/WithCompleteCondition';
import Continue from './components/Continue';
import Continues from './components/Continues';

function App() {

  return (
    <div className="App">
      <h1>basic</h1>
      <BasicCountDown />
      <h1>With message</h1>
      <WithMessage />
      <h1>Custom Renderer with Completed Condition</h1>
      <WithCompleteCondition />
      <h1>Continue from the last ended</h1>
      <Continue timer={65000}/>
      <h1>Continuous</h1>
      <Continues timer={65000}/>
    </div >
  );
}

export default App;
