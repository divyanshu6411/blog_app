import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer";


const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user"))||null,
    isFetching:false,
    err:false
}

export const Context  = createContext(INITIAL_STATE);

export const ContextProvider = ({children})=>
{
    const [state,dispatch] = useReducer(Reducer,INITIAL_STATE);
    // Reducer is pure function which take two parameter current state and action 

   useEffect(()=>
   {  
      localStorage.setItem("user",JSON.stringify(state.user));     
   },[state.user])

    return (<Context.Provider
    
    value={{
     user:state.user,
     isFetching:state.isFetching,
     error:state.error,
     dispatch
    }}
    >
{children}
    </Context.Provider>);

};


/*

To access or provide data to different level of component tree we use context api 
first we createContext();
then what are the value is wee want to provide is generated through context.Provider
then where we access the data by using context.Consumer in which we pass the function to use the value 
*/

/*
 actually there are three state that is stored in type 
 login successful , login start and login failure

 as we use useReducer for complex state management

 const [state,dispatch] = useReducer(reducer,INTIAL_STATE);
 state is current state and dispatch is used to send the type of action to reducer pure function to
 further handle by pure reducer function 

 reducer purefunction is written in reducer.jsx
 state is written in action.jsx
 and then main function is written in context.jsx which handle also context provider 

*/