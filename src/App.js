import { useState} from 'react';
import './App.css';
import Player from './Componente/Player/Player';
import Selected from './Componente/SelectedPlayer/Selected';
import Total from './Componente/Total/Total';
import Data from './Data/Data.json'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [selectP, setSelectP] = useState([]);
  const handleSelected = (pInfo) => {
    const newSelectP = [...selectP, pInfo];
    setSelectP(newSelectP);
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-around",}}>
      <div>
        {
          Data.map(players => <Player handleSelected={handleSelected} key={players.id} player={players}></Player>)
        }
      </div>
      <div>
        <h1 style={{borderBottom:'2px solid lightgray', padding:"12px"}}>Selected Players: <span style={{color: 'green'}}>{selectP.length}</span></h1>
        {
          selectP.map(selected => <Selected  key={selected.id} select={selected}></Selected>)
        }
        <Total SelectedPlayerInfo={selectP}></Total>
      </div>
    </div>
  );
}

export default App;
