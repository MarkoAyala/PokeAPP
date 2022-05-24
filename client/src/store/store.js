import {createStore , applyMiddleware } from 'redux';       // aplicar conexiones 
import {composeWithDevTools} from 'redux-devtools-extension'; //herramienta de redux para conectar todo 
import thunk from 'redux-thunk'                             // middleware para conectar react con redux y permita asincronia con redux 
import rootReducer from '../reducer/reducer';               // Conecto con el reducer



export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

