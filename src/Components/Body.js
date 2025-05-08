import {ResData} from "..//DATA/Res-Data"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus"

const Card = ({resdata})=> {
    const {title , price , duration , rating ,image} = resdata;
    return (
        <div id="card">
            <img src = {image} alt="card-img"></img>
            <h2>{title}</h2>
            <h4>{price}</h4>
            <h4>{duration}</h4>
            <h4>{rating}</h4>
        </div>
    )
}

const Body = ()=> {
    // hooks
    const [query,setQuery] = useState("")
    const [listOfRest , setListOfRest] = useState(ResData)
    const isOnline = useOnlineStatus();

    useEffect(()=>{
        console.log(query);
    },[query])


    if(!isOnline)
        return (
            <div>
            <h1>You are Offline !!</h1>
            <h2>Hence unable to load ......</h2>
            </div>
        )

        
    return (
        <div id="body">
            <div id="search-bar">
                <input 
                type="text" 
                placeholder="search-items-here" 
                value = {query}
                onChange={(e)=>{
                    setQuery(e.target.value)
                }}></input>
                <button 
                onClick={()=>{
                    console.log(query);
                        const filteredRes = ResData.filter((res)=>{
                            return (
                            res.title.toLowerCase().includes(query.toLowerCase())
                        )})
                    setListOfRest(filteredRes)
                    console.log(filteredRes)
                }}>Search</button>
            </div>



            <div id="functions">
                <button  >Top-Rated-Res</button>
                <button 
                onClick={()=>{
                    // sort function will directly update ResData and we does not want that .
                    // hence we have spread
                    const sortedRes = [...ResData].sort((a, b) => {
                        const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
                        const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
                        return priceA - priceB;
                    });
                    setListOfRest(sortedRes)
                    console.log(sortedRes)
                }}>Price</button>
                <button>Duration</button>
                <button>Rating</button>
            </div>




            <div id="card-container">
                {listOfRest.map((item)=>{
                    return (
                        <Link  
                        key={item.id} 
                        to={"/restaurants/" + item.id 
                        }>
                            <Card resdata = {item} />
                            </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;