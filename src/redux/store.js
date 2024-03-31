//createStore is deprecated so legacy_createStore is being used instead of createStore
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;