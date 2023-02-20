import './App.css';
import Countdown from 'react-countdown';

function App() {

  return (
    <div className="App">
      <Countdown date={Date.now() + 10000} />
    </div >
  );
}

export default App;
