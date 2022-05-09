import React from "react";
import { randomArray } from "../helpers/helpers";
import ActionAreaCard from "./ActionAreaCard";

const Home = ({ response }) => {
  console.log("response from home", response);
  // const homeArr = response && randomArray(response, 6);

  return (
    <>
      <div className="home">
        {/* {homeArr?.map((item) => {
          return <ActionAreaCard character={item} />;
        })} */}
      </div>
    </>
  );
};

export default Home;
