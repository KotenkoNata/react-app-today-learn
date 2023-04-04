import {CATEGORIES} from "../utils/data";

function CategoryFilter({setCurrentCategory}) {
    return (
        <aside>
            <ul>
                <li className="category">
                    <button className="btn btn-all-categories"
                            onClick={()=>setCurrentCategory('All')}>All</button>
                </li>
                {CATEGORIES.map((element)=>
                    <li key={element.name} className="category">
                        <button
                            className="btn btn-category"
                            style={{backgroundColor: element.color}}
                            onClick={()=>setCurrentCategory(element.name)}
                            >
                                {element.name}
                            </button>
                            </li>
                )}
            </ul>
        </aside>
    )
}

export default CategoryFilter;