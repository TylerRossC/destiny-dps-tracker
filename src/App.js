import './App.css';
import dpsCard from './components/dpsCard'
import overallDmg from './components/overallDmg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <dpsCard>dpsCard component</dpsCard>
          <br/>
          <overallDmg>overallDmg component</overallDmg>
        </p>
      </header>
    </div>
  );
}

export default App;
