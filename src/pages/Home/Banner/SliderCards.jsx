import React, { useState } from 'react';

const SliderCards = () => {
  // Card data array
  const cardData = [
    {
      id: 1,
      title: 'Card Title 1',
      content: 'This is the content for card 1.'
    },
    {
      id: 2,
      title: 'Card Title 2',
      content: 'This is the content for card 2.'
    },
    {
      id: 3,
      title: 'Card Title 3',
      content: 'This is the content for card 3.'
    },
    {
      id: 4,
      title: 'Card Title 4',
      content: 'This is the content for card 4.'
    },
    {
      id: 5,
      title: 'Card Title 5',
      content: 'This is the content for card 5.'
    }
  ];

  const [visibleCards, setVisibleCards] = useState(cardData.slice(0, 3));

  const handleNextCard = () => {
    setVisibleCards((prevCards) => {
      const nextIndex = cardData.indexOf(prevCards[2]) + 1;
      return nextIndex < cardData.length
        ? [prevCards[1], prevCards[2], cardData[nextIndex]]
        : prevCards;
    });
  };

  const handlePreviousCard = () => {
    setVisibleCards((prevCards) => {
      const prevIndex = cardData.indexOf(prevCards[0]) - 1;
      return prevIndex >= 0
        ? [cardData[prevIndex], prevCards[0], prevCards[1]]
        : prevCards;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-4">
        {visibleCards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-lg p-6 w-64">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={handlePreviousCard}
          className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleNextCard}
          className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SliderCards;
