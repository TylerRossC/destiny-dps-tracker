import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DpsCardCont from './components/DpsCardCont'
import OverallDmgCard from './components/OverallDmgCard';

function App() {
  return (
    <div className="App">
      <DpsCardCont> dpsCard component </DpsCardCont>
      <OverallDmgCard> overallDmg component </OverallDmgCard>
    </div>
  );
}

export default App;
