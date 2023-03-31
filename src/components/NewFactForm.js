import {CATEGORIES} from "../utils/data";
import {useState} from "react";

function NewFactForm() {
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');
    const textLength = text.length;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(text, source, category)
    }

    return <form className="fact-form" onSubmit={handleSubmit}>
        <input
            type='text'
            value={text}
            placeholder="Share a fact with the world..."
            onChange={(e) => setText(e.target.value)}
        />
        <span>{200 - textLength}</span>
        <input
            value={source}
            type="text"
            placeholder="Trustworthy source..."
            onChange={(e) => setSource(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose category:</option>
            {CATEGORIES.map(item=>{
                return <option key={item.name} value={item.name}>
                    {item.name.toUpperCase()}
                </option>
            })}
        </select>
        <button className="btn btn-large">Post</button>
    </form>
}

export default NewFactForm;