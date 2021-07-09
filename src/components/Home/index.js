import {useSelector, useDispatch} from 'react-redux'

function Home() {
    const alunos = useSelector( state => state.data);
    const loading = useSelector( state => state.loading);
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
    </>
  );
}

export default Home;
