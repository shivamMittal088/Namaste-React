import { useRouteError } from "react-router-dom"

const Error = ()=> {
    const err = useRouteError();  // it gives more information about the error , if incase error occured due to routing .
    console.log(err); // err is an object .
    return (
        <div>
            <h2>Oops!!</h2>
            <h3>Something went wrong ......</h3>
            <h4>{err.status}</h4>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default Error