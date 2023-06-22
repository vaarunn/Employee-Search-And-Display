import React from "react";

const NotFound = ({ users, search }) => {
  return (
    <div>
      {users?.length > 0 &&
        users.filter((user) => {
          if (search === "") {
            return user;
          } else if (
            user.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return user;
          }
        }).length === 0 && (
          <p className="font-bold mt-8 text-center md:text-3xl">
            No Employee Found
          </p>
        )}
    </div>
  );
};

export default NotFound;
