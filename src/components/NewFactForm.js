import {CATEGORIES} from "../utils/data";
import {useState} from "react";
import supabase from "../supabase";

function isValidHttpUrl(string) {
    let url;
    try {
        url = new URL(string);
    }catch (_){
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({setFacts, setShowForm}) {
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');
    const textLength = text.length;
    const [isUploading, setIsUploading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if(text && isValidHttpUrl(source) && category && textLength <= 200) {
            setIsUploading(true);
            const {data: newFact, error} = await supabase
                .from("facts")
                .insert([{text, source, category}])
                .select();
            setIsUploading(false);

            if(!error) setFacts((facts)=>[newFact[0], ...facts])

            setFacts((facts)=>[newFact[0], ...facts]);
            setText('');
            setSource('');
            setCategory('');
            setShowForm(false);
        }
    }

    return <form className="fact-form" onSubmit={handleSubmit}>
        <input
            type='text'
            value={text}
            placeholder="Share a fact with the world..."
            onChange={(e) => setText(e.target.value)}
            disabled={isUploading}
        />
        <span>{200 - textLength}</span>
        <input
            value={source}
            type="text"
            placeholder="Trustworthy source..."
            onChange={(e) => setSource(e.target.value)}
            disabled={isUploading}
        />
        <select value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={isUploading}
        >
            <option value="">Choose category:</option>
            {CATEGORIES.map(item=>{
                return <option key={item.name} value={item.name}>
                    {item.name.toUpperCase()}
                </option>
            })}
        </select>
        <button className="btn btn-large"
                disabled={isUploading}>Post</button>
    </form>
}

export default NewFactForm;