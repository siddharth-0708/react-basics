import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Scheduler from './Components/Scheduler/Scheduler';
let pet = "kaaju";

let obj = {
  country: "india",
  code: "+91"
}
let obj1 = {
  country: "Australia",
  code: "+00"
}
function App() {
  function elementClicked(e,name){
    console.log(e, name);
  }
  return (
    <div className="App">
      <Body name = "siddharth" age = "29">
         <h5>
          henineimn wpfkfwpfkwp fpfpefkmf 
         </h5>
         <Header {...obj1}></Header>
      </Body>
      <Header onClick = {(e) => elementClicked(e,pet)} {...obj}></Header>
      <Scheduler></Scheduler>
    </div>
  );
}

export default App;
