// Exercise:
// https://reqres.in/api/users

// Create a component UsersTable.jsx
// Render this in a table below.

import axios from "axios";
import { useEffect, useState } from "react";
import "./usersTable.css";

export default function UsersTable() {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  // If no users, show loading progress
  if (!users) {
    return "Loading...please wait.";
  }

  console.log(users);

  // We have users now...
  const usersTableRows = users.data.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>
        <div className="user--container">
          <img src={user.avatar} alt="UserAvatar" />
          <span>
            {user.first_name} {user.last_name}
          </span>
        </div>
      </td>
    </tr>
  ));

  // For Pagination
  // Render the buttons equal to the total_pages
  // On each button press, set page state -> 1 press -> 1 2 / 2

  const handlePageClick = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const paginationJsx = [1, 2].map((page) => (
    <button onClick={() => handlePageClick(page)}>{page}</button>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>{usersTableRows}</tbody>
      </table>
      {paginationJsx}
    </>
  );
}
