import Image from "next/image";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const users = await fetchUsers();
  return (
    <main>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Image
              src={user.avatar}
              alt="avatar image"
              width={80}
              height={80}
            />
            <hgroup>
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <h3>{user.email}</h3>
            </hgroup>
          </li>
        ))}
        ;
      </ul>
    </main>
  );
}
