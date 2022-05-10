import React from "react";
import ActionAreaCard from "./ActionAreaCard";

const Home = ({ response }) => {
  console.log("response from home", response);

  return (
    <>
      <div className="home">
        {response.map((item) => {
          return <ActionAreaCard character={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
