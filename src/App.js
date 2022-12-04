import './App.css';
import React from 'react';
import PeopleTable from './PeopleTable';
import PlanetsTable from './PlanetsTable';
import StarshipsTable from './StarshipsTable';

function App() {

  return (
    <div className="App">
        <PeopleTable/>
        <PlanetsTable/>
        <StarshipsTable/>
    </div>
  );
}

export default App;
