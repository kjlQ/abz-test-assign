import React , {useEffect , useState} from 'react'
import Button from "./Button";
import Card from "./Card";
import {getUsers} from '../api/requests'

const GetRequest = ({usersRef,created}) => {

    const [status,setStatus] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const [apiPage,setApiPage] = useState('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')

    useEffect(()=>{
        setApiPage('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
    },[created])

    useEffect(()=> {
        getUsers(apiPage,setIsLoading,setStatus)
    },[apiPage,created])

    const handleChangeApiPage = () => {
        setApiPage(status.links.next_url)
    }

    return(
        <div className="request" ref={usersRef}>
            <h1>Working with GET request</h1>
            <div className="users">
                {status?.users.map(item=><Card isLoading={isLoading} key={item.id} {...item} />)}
            </div>
            {status?.total_pages !== status?.page &&<Button type="button" action={handleChangeApiPage} title="Show more"/>}
        </div>
    )
}
export default GetRequest