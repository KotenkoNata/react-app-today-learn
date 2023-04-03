import './style.css';
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import FactList from "./components/FactList";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import supabase from "./supabase";
import Loader from "./components/Loader";


function App() {
    const [showForm, setShowForm] = useState(false);
    const [facts, setFacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function getFacts(){
            setIsLoading(true);
            const { data: facts, error } = await supabase
                .from('facts')
                .select('*')
                .order('voteInteresting', {ascending: false})
                .limit(1000);

            if(!error) setFacts(facts);
            else alert(error.message)

            setIsLoading(false)
        }

        getFacts();

    }, [])


  return (
      <>
          <Header setShowForm = {setShowForm} showForm={showForm}/>
          {showForm ? <NewFactForm setFacts = {setFacts} setShowForm={setShowForm}/> : null}
          <main className='main'>
              <CategoryFilter />
              {isLoading ? <Loader /> : <FactList facts={facts}/>}
          </main>
      </>
  )}

export default App;
