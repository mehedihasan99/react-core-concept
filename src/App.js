import logo from './logo.svg';
import './App.css';

const student = {name : "mehedi", roll: "2850"};
function App() {
  const names = ["sakib", "tamim", "musfiq", "mehedi"];
  return (
    <div className="App">
      {
        names.map( name => <Student name = {name}></Student>)
      }
      {/* call component */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person> */}
      {/* <Student name ="Akkas ALi" Roll ="69" dress ="blue"></Student>
      <Student name ="Pakir ALi" Roll ="49" dress ="black"></Student> */}
    </div>
  );
}

// create component
/*
function Person(){
  return (
    <div>
      <h2>This is mehedi hasan</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, maiores?</p>
    </div>
  )
}
*/
// data load dynamically : component with parameter
// in props we get data like object 
function Student (props){
  // console.log(props);
  return (
    <div>
      <h2>Student Name : {props.name}</h2>
      {/* <h4>Roll : {props.Roll}</h4> */}
    </div>
  )
}
export default App;
