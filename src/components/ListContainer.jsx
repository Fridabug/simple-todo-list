import {useContext, useState} from 'react';
import Context from '../Context';
import List from './List';

function ListContainer() {
  const {lists} = useContext(Context)  
    console.log('lists:', lists)

  return (
    <div className="list-container">
        {lists.length > 0 ? lists.map((list, i) => 
            <List thisList={list} key={i} index={i}/>
        ) :
        <h2>No to-dos yet.</h2>
        }
    </div>
  );
}

export default ListContainer;