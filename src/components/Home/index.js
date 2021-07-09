import {useSelector, useDispatch} from 'react-redux'

function Home() {
    const alunos = useSelector( state => state.data);
    const dispatch = useDispatch();

    function ADDTRUE (){
        dispatch({ type: 'ADD_TRUE'})
    }
    function ADDFALSE (){
      dispatch({ type: 'ADD_FALSE'})
  }

  return (
      <>
      <ul>
        {alunos ? <h1>ADD_TRUE</h1>:<h1>ADD_FALSE</h1>}
    </ul>
    <button onClick={ADDTRUE}>ADD_TRUE</button>
    <button onClick={ADDFALSE}>ADD_FALSE</button>
    </>
  );
}

export default Home;
