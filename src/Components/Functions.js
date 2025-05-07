import { ResData } from "../DATA/Res-Data";
import { useState} from "react"

const SearchPanel = () => {
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    return (
        <div id="search-bar">
            <input
                type="text"
                placeholder="search items here"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    console.log(query);
                    let filteredRes = ResData.filter((item) =>
                        item.title.toLowerCase().includes(query.toLowerCase())
                    );
                    setFilteredData(filteredRes);
                    console.log(filteredRes);
                }}
            >
                Search
            </button>
        </div>
    );
};


const FilterPanel = ()=> {
    const [filteredData, setFilteredData] = useState(ResData);
    return (
        <div id="filterPanel">
            <ul >
                <li><button 
                onClick={()=>{
                    const filterRes = ResData.filter((item)=>{
                        return (
                            item.rating >4.2
                        )
                    })
                    console.log(filterRes);
                    setFilteredData(filterRes)
                }}>Top Rated Rest</button></li>
                <li><button>Ratings</button></li>
                <li><button>Price</button></li>
                <li><button>Delivery Time</button></li>
            </ul>
        </div>
    )
}

export const Functions = ()=> {
    return (
        <div>
            <SearchPanel />
            <FilterPanel />
        </div>
    )
}