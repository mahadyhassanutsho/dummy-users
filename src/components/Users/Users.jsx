import { useLoaderData } from "react-router";

import User from "./User";

export default function Users() {
  const users = useLoaderData();

  return (
    <ul className="grid grid-cols-2 gap-10">
      {users.map((user, i) => (
        <li key={i}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}
