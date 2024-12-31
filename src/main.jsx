
import { createRoot } from 'react-dom/client'
//import Lecture  from './6thsem/Timetable'
//import MyComponent from './6thsem/comp1'
//import Component1 from './6thsem/component1'
//import StateManipulation from './6thsem/StateManipulation'
//import Iterable from './6thsem/Objiter'

//import MyPropsEx from './6thsem/propscomp3'
//import Anonymus from './6thsem/anonymus'

import Defaultprops from './6thsem/defaultprops'
createRoot(document.getElementById('root')).render(
  <div>
    <Defaultprops/><br/>
    <Defaultprops var1={"true"}/><br/>
    <Defaultprops var2={"yellow"}/><br/>
    <Defaultprops var3={"Click here"}/><br/>
    <Defaultprops var2={"red"} var3={"Tape here"}/><br/>
  </div>
)
