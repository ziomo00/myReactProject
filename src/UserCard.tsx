type UserCardProps = {
  name: string
  job: string
}

function UserCard(props: UserCardProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

export default UserCard