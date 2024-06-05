import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from './features/gitUserSlice';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    console.log(state.app);
    return state.app;
  })

  if(data.loading) {
    return <h2>Loading..</h2>
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => dispatch(getAllData())}>Get Github users</button>
      {data.users.map(user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </div>
  );
}

export default App;
