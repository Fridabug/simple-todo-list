import {useContext, useState} from 'react';
import Context from '../Context';

function AddListForm() {
  const {lists, setLists} = useContext(Context)  
  const [newListTitle, setNewListTitle] = useState("")

  const inputHandler = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setNewListTitle(title);
    console.log(newListTitle)
  }

  const addNewList = (e) => {
    e.preventDefault();
    setLists([...lists, {title: newListTitle, items: []}])
  }

  return (
    <form onSubmit={(e) => addNewList(e)}>
        <input type="text" name="title" placeholder="new to-do list" onChange={(e) => inputHandler(e)}/>
        <input type="submit" value="add"/>
    </form>
  );
}

export default AddListForm;