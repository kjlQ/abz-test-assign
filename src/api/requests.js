import axios from "axios";
const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/'

export function getUsers(apiPage,setIsLoading,setStatus) {
    setIsLoading(true)
    try {
        const fetchData = async () => {
            const {data} = await axios.get(`${apiPage}`)
            {data.success && setStatus(data)}
            setIsLoading(false)
        }
        fetchData()
    }
    catch (error) {
        console.log(error)
        setIsLoading(false)
    }
}
export function getPos_token(data,status,setPositions,setToken) {
    try {
        const fetchData = async () => {
            const {data} = await axios.get(`${baseUrl}positions`)
            const status = await axios.get(`${baseUrl}token`).then(res=>res.data)
            {data.success && setPositions(data.positions)}
            {status.success && setToken(status.token)}
        }
        fetchData()
    }
    catch (error) {
        console.log(error)
    }
}

