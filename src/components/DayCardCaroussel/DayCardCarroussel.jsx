import DayCard from "./../DayCard/DayCard";

function DayCardCarroussel() {
  const dayCardList = [
    {
      title: "Lundi",
    },
    {
      title: "mardi",
    },
    {
      title: "mercredi",
    },
  ];

  return (
    <div>
      {dayCardList.map((dayCard, index) => {
        return <DayCard key={index} jourName={dayCard.title} />;
      })}
    </div>
  );
}

export default DayCardCarroussel;
