import React from "react";

const HeadlineCards = () => {
  const cards = [
    {
      title: "Sun's Out, BOGO's Out",
      subtitle: "Through 8/26",
      img: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "New Restaurants",
      subtitle: "Added Daily",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "We Deliver Desserts Too",
      subtitle: "Tasty Treats",
      img: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          return (
            <div key={index} className="rounded-xl relative">
              <div className="absolute text-white bg-black/50 w-full h-full rounded-xl">
                <p className="px-2 pt-4 text-xl font-bold">{card.title}</p>
                <p className="px-2">{card.subtitle}</p>
                <button
                  className="border-white bg-white text-black mx-2 absolute 
                  bottom-4 opacity-80"
                >
                  Order Now
                </button>
              </div>
              <img
                src={card.img}
                alt=""
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeadlineCards;
