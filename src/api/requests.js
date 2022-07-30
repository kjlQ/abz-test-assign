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

const getFormDate = (position_id , name, email, phone, photo) => {
    const formData = new FormData()
    formData.append("position_id",position_id)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    {photo[0].size  < 5000000?
        formData.append("photo", photo[0])
        :
        alert('Image size should be less than 5MB ')
    }
    return formData
}

export async function onSubmitHandler({position_id , name, email, phone, photo , setCreated , token}) {
    const formData = getFormDate(position_id , name, email, phone, photo)
    const postResponse = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
            method: "POST",
            body: formData,
            headers: { Token: token },
        }
    )
    {postResponse.ok && setCreated(true)}
    return await postResponse.json()
}