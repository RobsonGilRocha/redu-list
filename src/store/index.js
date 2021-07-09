import { createStore } from 'redux';

const INITIAL_STATE = {
    data: ["ulo","wwwdwd","kilo"],
  }

  function alunos(state = INITIAL_STATE, action){
        switch (action.type) {
            case 'ADD_ALUNO' :
                return { ...state, data: [...state.data, action.title]};
            case 'DEL_ALUNO' :
                return { ...state, data: []};
                default:
                    return state;
        }
  }

const store = createStore(alunos)

export default store;
