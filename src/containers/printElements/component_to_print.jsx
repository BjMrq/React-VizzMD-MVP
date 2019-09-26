import React from 'react';

import PatientRef from '../patient_ref';
import Date from '../../components/date';
import Brand from '../../components/brand';
import MusclesTabe from '../muscles_table';
import FrontBody from '../body/front_body';
import BackBody from '../body/back_body';

const ComponentToPrint = () => {
  return (
    <div id="printComponent">
      <div className="print-container print-brand-section">
        <div className="print-item">
          <Brand />
        </div>
        <div className="print-item">
          <div className="print-info">
            <Date />
            <PatientRef />
          </div>
        </div>
      </div>
      <div className="print-container">
        <div className="print-body-part">
          <FrontBody frontBodyViewbox="-117 0 800 2830" />
        </div>
        <div className="print-body-part">
          <BackBody backBodyViewBox="717 0 800 2840" />
        </div>
        <div className="print-table">
          <MusclesTabe />;
        </div>
        <div className="print-body-part">
          <BackBody backBodyViewBox="-108 0 800 2840" />
        </div>
        <div className="print-body-part">
          <FrontBody frontBodyViewbox="675 0 800 2830" />
        </div>
      </div>
    </div>
  );
};

export default ComponentToPrint;