import React from "react";

const UserCard = ({ id, first_name, avatar }) => {
  return (
    <div
      key={id}
      className="grid place-items-center my-8 bg-[#FFF4F4] rounded-xl py-2 px-2 shadow-2xl"
    >
      <h1>
        id: <span className="font-bold">{id}</span>
      </h1>
      <img className="w-[150px] h-[150px] my-4" src={avatar} alt={first_name} />
      <h1 className="my-2">
        First Name: <span className="font-bold">{first_name}</span>
      </h1>
    </div>
  );
};

export default UserCard;
