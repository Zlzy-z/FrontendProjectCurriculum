interface UserCardProps {
    name: string;
    age: number;
    bio: string;
    avatarUrl: string;
}

function UserCard(props: UserCardProps) {
    return (
        <div>
            <img src={props.avatarUrl} alt={`${props.name} avatar`} />
            <h2>{props.name} </h2>
            <h3>{props.age}</h3>
            <p>{props.bio}</p>
            {/* add name age and bio */}
        </div>
    )
}

export default UserCard;