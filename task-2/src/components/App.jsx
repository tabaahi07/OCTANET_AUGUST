import React , {useState} from "react";
import Heading from "./Heading";
import ToDoItem from "./ToDoItem";
import '../styles.css' ;




function App() {
  const [input , setInput] = useState("") ;
  const [ToDoList , setToDoList] = useState([]) ;
 
  
  function updateInput(event){
    
      const value = event.target.value ;
      setInput(value) ;
  }

  function handleClick(event){
     ToDoList.push(input) ;
     setToDoList(ToDoList) ;
     setInput("") ;
    //  console.log(ToDoList) ;
    //  console.log("this is input : " + input) ;
  }

  function deleteItem(id){
       setToDoList(prevValue => {
          return prevValue.filter((item , index) => {
            return index!== id;
        });
       })
  }


  return (
    <div className="container">

      <Heading />
      <div className="form">
                <input onChange={updateInput} value = {input} name = "listItem" type="text" />
                <button onClick={handleClick}>
                  <span>Add</span>
                </button>
      </div>
      
      <div>
      <ul>
          {ToDoList.map((item , index) => (<ToDoItem id = {index} key = {index} item = {item} manageCheck = {deleteItem} /> ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
