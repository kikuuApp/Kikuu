import {createStore,applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import thunkMiddleware from "redux-thunk";
import { autoRehydrate, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

/** 
 * Persist storage connfig set up
 * @key[root]
 * @storage[storage]
*/
const perconfig ={
    key: "root",
    storage
  };

//persist reducer manages the rootreducers
const persist = persistReducer(perconfig, rootReducers);

export let store = createStore(persist, applyMiddleware(thunkMiddleware));
export let persistor = persistStore(store);
