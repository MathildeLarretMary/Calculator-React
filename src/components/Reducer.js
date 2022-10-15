//Import calc
import { calcul } from "./Calcul";

   // state de base
const initialState = {
    screen: null,
  }

  // actions du reducer
  const reducer = (state, action) => {

    switch (action.type) {

      case 'operator':
      case 'number':
        return {
          // on copie le state
          ...state,
          // à l'écran, on rajoute à chaque onClick la value du number
          // valueOne: [state.valueOne] + action.payload,
          screen : [state.screen] + action.payload,

        };

      case "total":
          return {
            // on copie le state
            ...state,

            screen: calcul([state.screen]),
            // valueOne: calc([state.screen]),
          };

      case "delete":
        return {
          initialState
        }  

      default:
        throw new Error();
        
    }
  
  }
   
export { reducer, initialState };