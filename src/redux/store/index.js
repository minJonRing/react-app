import { createStore } from 'redux'
import reducer from '../reducer/index' 
const init = {
    'First':0,
    'Second':10,
    'Third':20
}
const store = createStore(reducer,init)
export default store;