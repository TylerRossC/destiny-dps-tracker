import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DpsCardCont from './components/DpsCardCont'
import OverallDmgCard from './components/OverallDmgCard';

function App() {
  return (
    <div className="App">

    <div style={{
      backgroundImage: `("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fb46f39-eaf9-4619-875d-09b909e187d7/deamffj-c653894c-0bac-408e-baa3-aa4547a2f918.png/v1/fill/w_1280,h_720,q_80,strp/destiny_wallpaper__the_traveler_by_spicyramenguy_deamffj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvM2ZiNDZmMzktZWFmOS00NjE5LTg3NWQtMDliOTA5ZTE4N2Q3XC9kZWFtZmZqLWM2NTM4OTRjLTBiYWMtNDA4ZS1iYWEzLWFhNDU0N2EyZjkxOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dXyYckJw_VsJJY2Qv-oU7PfpLB3iCC28XUloL4ZEzHs")`
    }}></div>
      
        
          <DpsCardCont> dpsCard component </DpsCardCont>
          <br/>
          <br/>
          <br/>
          <OverallDmgCard> overallDmg component </OverallDmgCard>
        
        
    </div>
  );
}

export default App;
