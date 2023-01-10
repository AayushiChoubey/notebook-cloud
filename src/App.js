
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
      <Navbar /> 
      <Alert message="This is amazing React course" />
      <div className="container">
   
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route> 
      </Switch>
      </div>
      </NoteState>
  </>
  );
}

export default App;
