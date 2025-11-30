import { useLocation, useParams, useSearchParams } from "react-router-dom"

const User = () => {

    const {id} = useParams()

    const location = useLocation()

    const [queryParams, setQueryParams] = useSearchParams()

    console.log(queryParams.get('a'))

    

    console.log(queryParams)

    return(
        <>User id is {id}
        <button onClick={() => setQueryParams({page: 3})}>Update Params</button>
        </>
    )
}

export default User