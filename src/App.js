import React, {useContext} from 'react';
import './App.css';
import AddListForm from './components/AddListForm';
import ListContainer from './components/ListContainer'
import Context from './Context';

function App() {
  const {lists} = useContext(Context)

  return (
    <div className="App">
      <AddListForm/>
      {lists &&
        <ListContainer/>
      }
    </div>
  );
}

export default App;
