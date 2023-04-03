import {CATEGORIES} from "../utils/data";

function Fact({fact}) {
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
                <button>👍 {fact.voteInteresting}</button>
                <button>🤯 {fact.voteMindblowing}</button>
                <button>⛔️ {fact.voteFalse}</button>
            </div>
        </li>
    )
}

export default Fact;