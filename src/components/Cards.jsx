import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const Cards = () => {
  return (
    <div className='w-full py-20 px-4 bg-white'>
      <div className='max-w-4xl mx-auto grid md:grid-cols-3 gap-8'>
        <Card
          id={1}
          name='Single'
          img={Single}
          price='100'
          descriptions={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
        />
        <Card
          id={2}
          name='Double'
          img={Double}
          price='100'
          descriptions={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
        />
        <Card
          id={3}
          name='Triple'
          img={Triple}
          price='100'
          descriptions={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
        />
      </div>
    </div>
  );
};

export default Cards;
