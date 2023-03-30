import Fact from "./Fact";
import {initialFacts} from "../utils/data";

function FactList() {
    const facts = initialFacts;
    return <section>
        <ul className="facts-list">
            {facts.map(fact =>
                <Fact key = {fact.id} fact = {fact}/>
            )}
        </ul>
        <p>There are {facts.length} facts in the database. Add your own</p>
    </section>
}

export default FactList;