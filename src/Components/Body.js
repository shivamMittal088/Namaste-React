import {ResData} from "..//DATA/Res-Data"
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus"

const Card = ({resdata})=> {
    const {title , price , duration , rating ,image} = resdata;
    return (
        <div className="w-64 bg-white border rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-4">
        <img src={image} className="w-full h-40 object-cover rounded-lg mb-3" />
        <h2 className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
        <div className="text-sm text-gray-600 mb-1">{price}</div>
        <div className="flex justify-between text-sm text-gray-500">
        <span>{duration}</span>
        <span>{rating} ★</span>
        </div>
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
            <div className="mt-3 mb-3 sticky top-0 z-10 bg-white shadow-md p-2 m-1" >
                <input 
                className="p-2 ml-3 w-300 border-1 rounded-xl"
                type="text" 
                placeholder="search-items-here" 
                value = {query}
                onChange={(e)=>{
                    setQuery(e.target.value)
                }}></input>

                <button 
                className="ml-3 w-19 border-1 h-9 rounded-2xl text-white bg-black hover:w-17 hover:h-7 transition-all duration-300 "
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
  <button className="ml-96 px-4 py-2 w-36 border rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-white transition duration-300">
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
            <div className="flex flex-wrap gap-6 gap-y-8 justify-center">
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