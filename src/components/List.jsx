import { useEffect } from 'react';
import {useState, useContext} from 'react';
import Context from '../Context';

function List({thisList, index}) {
    const {lists, setLists} = useContext(Context)
    const [newToDo, setNewToDo] = useState({});

    const toDoInputHandler = (e) => {
        e.preventDefault();
        const toDoTitle = e.target.value;
        setNewToDo({title: toDoTitle});
        // console.log(newToDo)
    }


    const addNewToDo = (e) => {
        e.preventDefault();
        const toDo = e.target.value;
        const updatedLists = [...lists]
        updatedLists[index] = {title: thisList.title, items: [...thisList.items, newToDo]}
        setLists(updatedLists)
    }

    const deleteToDo = (e) => {
        e.preventDefault();
        const toDo = e.target.name;
        console.log('to do to delete:', toDo)
        const updatedLists = [...lists]
        updatedLists[index].items = lists[index].items.filter(item => item.title !== toDo)
        console.log("is the to do gone?", updatedLists)
        setLists(updatedLists)
    }

    const deleteList = (e) => {
        e.preventDefault();
        const updatedLists = [...lists]
        updatedLists.splice(index, 1)
        setLists(updatedLists)
    }

    return (
        <div className='list'>
            <h3>{thisList.title}</h3>
            <div className='to-dos'>
                    {thisList.items.length > 0 && thisList.items.map((item, i) => 
                    <form className='to-do'>
                        <div key={i}>
                            <label for={item.title}>{item.title}</label>
                            <input type="submit" value="done" name={item.title} index={i} onClick={(e) => deleteToDo(e)}/>
                        </div>
                    </form>
                    )}
                <form onSubmit={addNewToDo}>
                <input type="text" name="title" placeholder="new to-do" onChange={(e) => toDoInputHandler(e)}/>
                <input type="submit" value="add"/>
                </form>
            </div>
            <button onClick={(e) => deleteList(e)}>delete</button>
        </div>
    )
}

export default List;