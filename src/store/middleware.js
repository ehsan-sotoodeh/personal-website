import initialState from './initialState.json'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux"

const consoleMessages = store => next => action => {
    //console.log("old : ",JSON.stringify(store.getState()));
    //console.log(action)
    let results = next(action);
    //console.log("new : ",(store.getState()));
    return results;
}


function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch(e) {
      console.log(e)
    }
  }
  
  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) return undefined
      return JSON.parse(serializedState)
    } catch(e) {
      console.log(e)
      return undefined
    }
  }

  const persistedState = loadFromLocalStorage()




export default () =>{
    const appState = (persistedState)? persistedState : initialState;
    const store = applyMiddleware(thunk,consoleMessages)(createStore)(appReducer,appState);
    store.subscribe(() => saveToLocalStorage(store.getState()))

    return store;
}