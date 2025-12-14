import {useState, useEffect} from 'react';

interface UserFetcherProps{
    userId: number;
}

interface User {
    id: number;
    name: string;
    email: string;
}


function UserFetcher(props: UserFetcherProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
        .then(response => {
            if (!response.ok) throw new Error ('Failed to fetch');
            return response.json();
        })
        .then(data => {
            setUser (data);
        })
        .catch(err => {
            console.log("Error grabbing user");
        })
    }, [props.userId]);

        if (user == null){
            return <p>No User Found</p>
        }
    return (
        <div>
            <h2>User Info</h2>
            <p>Name : {user.name}</p>
            <p>Email; {user.email}</p>
        </div>
    )
}

export default UserFetcher;