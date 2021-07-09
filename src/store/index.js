import { createStore } from 'redux';

const INITIAL_STATE = {
    data: true,
  }

  function alunos(state = INITIAL_STATE, action){
        switch (action.type) {
            case 'ADD_TRUE' :
                return { data: true};
            case 'ADD_FALSE' :
                return { data: false};
                default:
                    return state;
        }
  }

const store = createStore(alunos)

export default store;
