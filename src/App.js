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
    const [currentCategory, setCurrentCategory] = useState("All");

    useEffect(() => {

        async function getFacts(){
            setIsLoading(true);

            let query = supabase
                .from('facts')
                .select('*');

            if(currentCategory!=='All'){
                query = query.eq("category", currentCategory)
            }

            const { data: facts, error } = await query
                .order('voteInteresting', {ascending: false})
                .limit(1000);

            if(!error) setFacts(facts);
            else alert(error.message)

            setIsLoading(false)
        }

        getFacts();

    }, [currentCategory]);


  return (
      <>
          <Header setShowForm = {setShowForm} showForm={showForm}/>
          {showForm ? <NewFactForm setFacts = {setFacts} setShowForm={setShowForm}/> : null}
          <main className='main'>
              <CategoryFilter setCurrentCategory={setCurrentCategory}/>
              {isLoading ? <Loader /> : <FactList facts={facts} setFacts = {setFacts}/>}
          </main>
      </>
  )}

export default App;
