import './style.css';
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import {useState} from "react";


function App() {
    const [showForm, setShowForm] = useState(false);
    const appTitle = 'Today I Learned';

  return (
      <>
          <header className="header">
            <div className="logo">
              <img
                  src="./img/logo.png"
                  height="68"
                  width="68"
                  alt="Today I Learned Logo"
              />
              <h1>{appTitle}</h1>
            </div>
            <button
                className="btn btn-large btn-open"
                onClick={()=>setShowForm(()=>!showForm)}>Share a fact</button>
          </header>
          {showForm ? <NewFactForm/> : null}
          <main className='main'>
              <CategoryFilter />
              <FactList></FactList>
          </main>
      </>
  )}

export default App;
