import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NotFound from "./NotFound";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    const response = await axios("https://reqres.in/api/users?page=2");

    setUsers(response.data.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="search for employees here..."
          className="outline-none border-black border rounded-xl p-2 lg:w-[350px]"
        />
      </div>
      {users
        ?.filter((user) => {
          if (search === "") {
            return user;
          } else if (
            user.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return user;
          }
        })
        ?.map((user) => {
          const { id, first_name, avatar } = user;
          return <UserCard id={id} first_name={first_name} avatar={avatar} />;
        })}
      <NotFound users={users} search={search} />
    </div>
  );
};

export default Users;
