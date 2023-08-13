
import React  from 'react' ;
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoItem(props){
  
  return <div className='Item'>
     <li  >  {props.item} </li>

  <button onClick = { () => {
           props.manageCheck(props.id) ;
  } }> <DeleteIcon fontSize='3rem'> </DeleteIcon> </button>
  </div>

}



export default ToDoItem ;