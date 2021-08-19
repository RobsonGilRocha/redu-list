import { createStore } from 'redux';

const INITIAL_STATE = {
    data: true,
    loading: false,
    login: false,
    loginType: `regular`,
    powerOn: false,
    colorDark: false,
    colorPrimary: false,//sem uso no action
    colorSecondary: false,//sem uso no action
    error: false,
    errorMsg: `one`, //sem uso no action
  }

  function truefalse(state = INITIAL_STATE, action){
        switch (action.type) {
            case 'DATA_TRUE' :
                return { ...state, data: true};
            case 'DATA_FALSE' :
                return { ...state, data: false};
            case 'LOAD_TRUE' :
                return { ...state, loading: true};
            case 'LOAD_FALSE' :
                return { ...state, loading: false};
            case 'LOGIN_DEV_TRUE' :
                  return {...state, loginType: `loginTypeDev`};
            case 'POWER_ON_FALSE' :
                  return { ...state, powerOn: false};
            case 'POWER_ON_TRUE' :
                  return { ...state, powerOn: true};
            case 'COLORDARK_FALSE' :
                  return { ...state, colorDark: false};
            case 'COLORDARK_TRUE' :
                  return { ...state, colorDark: true};
            case 'ERROR_FALSE' :
                  return { ...state, error: false};
            case 'ERROR_TRUE' :
                  return { ...state, error: true};
                default:
                    return state;
        }
  }

const store = createStore(truefalse)

export default store;
