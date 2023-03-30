import {CATEGORIES} from "../utils/data";

function CategoryFilter() {
    return (
        <aside>
            <ul>
                <li className="category">
                    <button className="btn btn-all-categories">All</button>
                </li>
                {CATEGORIES.map((element)=>
                    <li key={element.name} className="category">
                        <button
                            className="btn btn-category"
                            style={{backgroundColor: element.color}}
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