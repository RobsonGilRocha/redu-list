import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

function Home() {
    const [ input1, setInput1] = useState()
    const alunos = useSelector( state => state.data);
    const dispatch = useDispatch();

    function addAluno (){
        dispatch({ type: 'ADD_ALUNO', title: `${input1}`})
        setInput1("")
    }

    function delAluno (){
      dispatch({ type: 'DEL_ALUNO'})
      setInput1("")
  }

  return (
      <>
      <ul>
        {alunos.map (alunos => <li key={alunos}>{alunos}</li>)}
    </ul>
    <input value={input1} onChange={(event) => setInput1(event.target.value)}/>
    <button onClick={addAluno}>ADD</button>
    <button onClick={delAluno}>DEL</button>
    </>
  );
}

export default Home;
