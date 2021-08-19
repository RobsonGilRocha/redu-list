import {useSelector, useDispatch} from 'react-redux'

function Home() {
    const alunos = useSelector( state => state.data);
    const login = useSelector( state => state.login);
    const loginType = useSelector( state => state.loginType);
    const powerOn = useSelector( state => state.powerOn);
    const colorDark = useSelector( state => state.colorDark);
    const loading = useSelector( state => state.loading);
    const colorPrimary = useSelector( state => state.colorPrimary);
    const colorSecondary = useSelector( state => state.colorSecondary);
    const error = useSelector( state => state.error);
    const errorMsg = useSelector( state => state.errorMsg);

    const dispatch = useDispatch();

    function ADDTRUE (){
        dispatch({ type: 'DATA_TRUE'})
    }
    function ADDFALSE (){
      dispatch({ type: 'DATA_FALSE'})
  }
  function LOADTRUE (){
    dispatch({ type: 'LOAD_TRUE'})
  }
  function LOADFALSE (){
  dispatch({ type: 'LOAD_FALSE'})
  }

  return (
      <>
      <ul>
        {alunos ? <h1>DATA_TRUE</h1>:<h1>DATA_FALSE</h1>}
    </ul>
    <button onClick={ADDTRUE}>DATA_TRUE</button>
    <button onClick={ADDFALSE}>DATA_FALSE</button>
    <ul>
        {loading ? <h1>loading_TRUE</h1>:<h1>loading_FALSE</h1>}
    </ul>
    <button onClick={LOADTRUE}>LOAD_TRUE</button>
    <button onClick={LOADFALSE}>LOAD_FALSE</button>
    <ul>
        {login ? <h1>login _TRUE</h1>:<h1>login _FALSE</h1>}
        <h1>loginType _{loginType}</h1>
        <input   />
    </ul>
    <ul>
        {powerOn ? <h1>powerOn _TRUE</h1>:<h1>powerOn _FALSE</h1>}
    </ul>
    <ul>
        {error ? <h1>error _TRUE</h1>:<h1>error _FALSE</h1>}
        {errorMsg ? <h1>errorMsg _TRUE</h1>:<h1>errorMsg _FALSE</h1>}
    </ul>
    <ul>
        {colorDark ? <h1>colorDark _TRUE</h1>:<h1>colorDark _FALSE</h1>}
        {colorPrimary ? <h1>colorPrimary _TRUE</h1>:<h1>colorPrimary _FALSE</h1>}
        {colorSecondary ? <h1>colorSecondary _TRUE</h1>:<h1>colorSecondary _FALSE</h1>}
    </ul>
    </>
  );
}

export default Home;
