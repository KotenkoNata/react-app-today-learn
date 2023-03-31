import './style.css';
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import {useState} from "react";
import Header from "./components/Header";


function App() {
    const [showForm, setShowForm] = useState(false);

  return (
      <>
          <Header setShowForm = {setShowForm} showForm={showForm}/>
          {showForm ? <NewFactForm/> : null}
          <main className='main'>
              <CategoryFilter />
              <FactList></FactList>
          </main>
      </>
  )}

export default App;
