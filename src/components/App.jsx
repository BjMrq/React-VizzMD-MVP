import React from 'react';

import MusclePopUp from '../containers/MusclePopUp';
import PatientRef from '../containers/PatientRef';
import TopActions from './TopActions';
import Scale from '../components/Scale';
import Body from '../containers/body/Body';

import MusclesTable from '../containers/MusclesTable';

const App = () => {
  return (
    <div className="app">
      <div className="top-actions">
        <TopActions />
      </div>
      <MusclePopUp />
      <PatientRef />
      <div className="scale-body">
        <Scale />
        <Body />
      </div>
      <MusclesTable />
    </div>
  );
};

export default App;
