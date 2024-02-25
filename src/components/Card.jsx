import React from "react";

const Card = ({ name, img, price, descriptions, id }) => {
  return (
    <div
      className={`w-full shadow-xl ${
        id == 2 ? "bg-gray-100" : ""
      } flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300`}
    >
      <img
        className='w-20 mx-auto mt-[-3rem] bg-transparent'
        src={img}
        alt={name}
      />
      <h2 className='text-2xl font-bold text-center py-8'>{name}</h2>
      <p className='text-center text-4xl font-bold'>${price}</p>
      <div className='text-center font-medium'>
        {descriptions.map((description, index) => (
          <p
            key={index}
            className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
          >
            {description}
          </p>
        ))}
      </div>
      {id == 2 ? (
        <button className='bg-black text-[#00df9a] w-48 rounded-md font-medium my-6 mx-auto py-3 px-6'>
          Start Trial
        </button>
      ) : (
        <button className='bg-green-500 w-48 rounded-md font-medium my-6 mx-auto py-3 px-6'>
          Start Trial
        </button>
      )}
    </div>
  );
};

export default Card;
