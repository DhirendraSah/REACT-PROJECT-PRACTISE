import { createRoot } from 'react-dom/client';
//import Lecture  from './6thsem/Timetable';
//import MyComponent from './6thsem/comp1';
//import Component1 from './6thsem/component1';
//import StateManipulation from './6thsem/StateManipulation';
//import Iterable from './6thsem/Objiter';

//import MyPropsEx from './6thsem/propscomp3';
//import Anonymus from './6thsem/anonymus';

//import Defaultprops from './6thsem/defaultprops';
import StateExp from './6thsem/stateExp1'; // Use PascalCase for component names

createRoot(document.getElementById('root')).render(
  <div>
    <StateExp /> {/* Correct syntax for using a React component */}
  </div>
);
