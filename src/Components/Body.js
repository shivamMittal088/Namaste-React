import {ResData} from "..//DATA/Res-Data"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus"

const Card = ({resdata})=> {
    const {title , price , duration , rating ,image} = resdata;
    return (
        <div id="card" className="border-1">
            <img src = {image} alt="card-img" className="w-60"></img>
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
        <div>
            <div className="mt-3 mb-3" >
                <input 
                className="p-2 ml-3 w-300 border-1 rounded-xl"
                type="text" 
                placeholder="search-items-here" 
                value = {query}
                onChange={(e)=>{
                    setQuery(e.target.value)
                }}></input>
                <button 
                className="ml-3 w-19 border-1 h-9 rounded-2xl text-white bg-black hover:w-16 hover:h-5 transition-all duration-300 "
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



         <div id="functions" className="mb-6 flex flex-wrap items-center gap-4">

  {/* Top Rated */}
  <button className="px-4 py-2 w-36 border rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-white transition duration-300">
    Top-Rated-Res
  </button>

  {/* Price */}
  <button
    className="px-4 py-2 w-36 border rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:text-gray-200 transition duration-300"
    onClick={() => {
      const sortedRes = [...ResData].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));
        return priceA - priceB;
      });
      setListOfRest(sortedRes);
      console.log(sortedRes);
    }}
  >
    Price
  </button>

  {/* Duration */}
  <button className="px-4 py-2 w-36 border rounded-md text-white bg-green-600 hover:bg-green-700 hover:text-gray-200 transition duration-300">
    Duration
  </button>

  {/* Rating */}
  <button className="px-4 py-2 w-36 border rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:text-gray-200 transition duration-300">
    Rating
  </button>



</div>
            <div id="card-container"className="flex flex-wrap w-40 h-60">
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