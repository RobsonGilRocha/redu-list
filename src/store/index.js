import { createStore } from 'redux';

const INITIAL_STATE = {
    data: true,
    loading: false,
  }

  function truefalse(state = INITIAL_STATE, action){
        switch (action.type) {
            case 'DATA_TRUE' :
                return { ...state, data: true};
            case 'DATA_FALSE' :
                return { ...state, data: false};
            case 'LOAD_TRUE' :
                  return {...state, loading: true};
            case 'LOAD_FALSE' :
                  return { ...state, loading: false};
                default:
                    return state;
        }
  }

const store = createStore(truefalse)

export default store;
