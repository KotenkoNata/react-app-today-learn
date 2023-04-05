import {CATEGORIES} from "../utils/data";
import supabase from "../supabase";
import {useState} from "react";

function Fact({fact, setFacts}) {
const [isUpdating, setIsUpdating] = useState(false);
    async function handleVote(columnName) {
        setIsUpdating(true);
       const {data: updatedFact, error} = await supabase.from('facts')
            .update({[columnName]: fact[columnName] + 1})
            .eq("id", fact.id)
            .select()
        setIsUpdating(false);
        if(!error) setFacts((facts)=>facts.map((item) => item.id === fact.id ? updatedFact[0] : item))
    }

    return (
        <li className="fact">
            <p>
                {fact.text}
                <a
                    className="source"
                    href={fact.source}
                    target="_blank"
                >(Source)</a
                >
            </p>
            <span className="tag" style={{backgroundColor: CATEGORIES.find((item => item.name === fact.category)).color}}
            >{fact.category}</span
            >
            <div className="vote-buttons">
                <button onClick={()=>handleVote("voteInteresting")} disabled={isUpdating}>👍 {fact.voteInteresting}</button>
                <button onClick={()=>handleVote("voteMindblowing")}>🤯 {fact.voteMindblowing}</button>
                <button onClick={()=>handleVote("voteFalse")}>⛔️ {fact.voteFalse}</button>
            </div>
        </li>
    )
}

export default Fact;