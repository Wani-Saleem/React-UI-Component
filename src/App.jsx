import './App.css'
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Data from './Components/Data';

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>UI Card Component</h1>
      <Card username={Data[0].username} btn={Data[0].btn} />
      <Card2 username={Data[1].username} btn={Data[1].btn}/>
    </>
  )
}

export default App
