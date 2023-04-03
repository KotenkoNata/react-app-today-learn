import './style.css';
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import {useState} from "react";
import Header from "./components/Header";
import {initialFacts} from "./utils/data";


function App() {
    const [showForm, setShowForm] = useState(false);
    const [facts, setFacts] = useState(initialFacts);

  return (
      <>
          <Header setShowForm = {setShowForm} showForm={showForm}/>
          {showForm ? <NewFactForm setFacts = {setFacts} setShowForm={setShowForm}/> : null}
          <main className='main'>
              <CategoryFilter />
              <FactList facts={facts} />
          </main>
      </>
  )}

export default App;
