import { combineReducers } from 'redux';
import PatientReducer from './patient_reducer';
import MusclesReducer from './muscles_reducer';
import MuscleReducer from './muscle_reducer';
import BodyReducer from './body_reducer';
import PageLoadReducer from './page_load_reducer';

// State and reducers
const rootReducer = combineReducers({
  firstPageLoad: PageLoadReducer,
  patient: PatientReducer,
  muscles: MusclesReducer,
  selectedMuscle: MuscleReducer,
  body: BodyReducer
});

export default rootReducer;
