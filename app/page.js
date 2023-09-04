import Image from "next/image";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const users = await fetchUsers();
  return (
    <main className="p-4">
      <h1>Users List</h1>
      <ul className="flex flex-wrap gap-2 max">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex  bg-slate-400 rounded-xl p-4 w-full items-center justify-between"
          >
            <Image
              className="rounded-full"
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
      </ul>
    </main>
  );
}
