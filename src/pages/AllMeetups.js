import React from "react";
const dummyData = [
  { id: "m1", title: "this is the first meet up" },
  { id: "m2", title: "this is the second meetup" },
];
function AllMeetupsPage() {
  return (
    <div>
      <h1>AllMeetupsPage</h1>
      <ul>
        {dummyData.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>; 
        })}
      </ul>
    </div>
  );
}

export default AllMeetupsPage;
