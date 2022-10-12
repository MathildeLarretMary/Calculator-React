//Import calc
import { calc } from "./Calcul";

   // state de base
const initialState = {
    screen: "",
    valueOne: "",
    valueTwo: null,
    operator: ""
  }

// const calcElements = ['-', 3, '+', 1];

  // actions du reducer
  const reducer = (state, action) => {

    switch (action.type) {

      case 'number':
        return {
          // on copie le state
          ...state,
          // à l'écran, on rajoute à chaque onClick la value du number
          valueOne: [state.valueOne] + action.payload,
          screen : [state.screen] + action.payload,

        };

      case 'operator':
        return {
          // on copie le state
          ...state,
          screen : [state.screen] + action.payload,

          // on met la valeur de valueOne dans valueTwo
          valueTwo: [state.valueOne],
          // on vide valueOne
          valueOne: "",

          // on garde l'operator dans la copie du state
          operator: action.payload

        };

      case "total":
          return {
            // on copie le state
            ...state,

            screen:"" + calc(state.valueTwo, state.valueOne, state.operator),
            valueOne: calc(state.valueTwo, state.valueOne, state.operator)
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