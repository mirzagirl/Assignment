// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import { Map } from './Components/Map';
import { createTodos } from "./Utils/calcula";
const todo = createTodos();

function App() {
  return (
    <div className="App">
      <button onClick={()=>console.log("Hello")}    />
      {/* <Dashboard  
        todos={todo}
      />   */}
      <Map />
    </div>
  );
}

export default App;
