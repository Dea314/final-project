import Form from "./Form";
import { useState, useEffect } from "react";
import Copycard from "./Copycard";

const Playground = ({ response }) => {
  const [searchQuery, setSearchQuery] = useState();
  const [playgroundCharacters, setPlaygroundChracters] = useState([]);
  //u need a state that you update on the form submit
  console.log("response from home", response);
  /*---------------  CORS ---------------------*/

  useEffect(() => {
    fetch(
      `http://localhost:5050/playground?${
        searchQuery?.length && `name=${searchQuery}`
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setPlaygroundChracters(data.characters);
      })
      .catch((err) => console.log(err));
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.searchQuery.value);
    setSearchQuery(e.target.searchQuery.value);
  };
  /*---------------  CORS ---------------------*/
  return (
    <>
      <div>Playground characters</div>
      <Form handleSubmit={handleSubmit} />


      {playgroundCharacters.map(character => <div>{character.name}</div>)}

<Copycard />
    </>
  );
};
export default Playground;
