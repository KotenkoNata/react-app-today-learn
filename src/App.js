import './style.css';
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import {initialFacts} from "./utils/data";
import supabase from "./supabase";


function App() {
    const [showForm, setShowForm] = useState(false);
    const [facts, setFacts] = useState([]);

    useEffect(() => {

        async function getFacts(){
            const { data: facts, error } = await supabase
                .from('facts')
                .select('*')
            setFacts(facts);
        }

        getFacts();

    }, [])


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
