import axios from "axios";
import { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url).then((res) =>
            setData(res.data.slice(0, 10)));

    }, []);

    return (
        <div >
            <ul>
            {data.map(user => <li key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
            </li>)}
            </ul>
        </div>
    )
}
export default UserList;
