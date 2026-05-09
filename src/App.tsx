import UserCard from './UserCard'

function App() {
  return (
    <div>
      <h1>Пользователи</h1>

      <UserCard name="Иван" job="Frontend-разработчик" />
      <UserCard name="Анна" job="UI/UX дизайнер" />
      <UserCard name="Олег" job="Backend-разработчик" />
    </div>
  )
}

export default App