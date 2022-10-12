/* eslint-disable no-unreachable */
import './App.css';
import Screen from '../Screen/Screen';
import Button from '../Button/Button';
import buttons from '../../data/numbers';
import { useReducer } from 'react';
// New comment

import { reducer, initialState }  from '../Reducer';

function App() {

  //state
  const [state, dispatch] = useReducer(reducer, initialState);

  //render
  return (
    <div className="App">
      <div className='calculator' action='submit'>
        {/*dans text si dans screen il n'y a rien
        (aucune touche de tapée)
        la valeur par défaut est '0'
        donc text = screen OU '0' en fonction de screen*/}
        <Screen  text={state.screen || '0'}/>
        <div className='buttons'>
          {buttons.map(button => {
          return <Button actionClick = { () => {
            dispatch({type: button.class, payload: button.value})
          }}
          className={button.class} value={button.value} key= {button.id}/> 
          })}
        </div>
        
      </div>
      
    </div>
  );
}
// memo va permettre de ne modifier QUE ce qui est nécéssaire! 
// rien de plus
export default App;