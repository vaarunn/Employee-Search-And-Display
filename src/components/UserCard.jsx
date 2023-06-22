import React from "react";

const UserCard = ({ id, first_name, avatar }) => {
  return (
    <div>
      <div
        key={id}
        className="grid place-items-center mt-8 my-4  rounded-3xl  px-4 shadow-2xl border-black border-2 relative "
      >
        <h1 className="absolute font-bold top-[-20px] w-[50px] h-[50px] grid place-items-center right-[-20px] rounded-full bg-black text-white text-sm">
          {id}
        </h1>
        <img
          className="w-full h-[80%] rounded-3xl"
          src={avatar}
          alt={first_name}
        />
      </div>

      <h1 className="font-bold text-center">{first_name}</h1>
    </div>
  );
};

export default UserCard;
