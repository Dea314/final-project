import Form from "./Form";

const Playground = ({ response }) => {
  console.log("response from home", response);
  return (
    <>
      <div>Playground characters</div>
      <Form />
    </>
  );
};

export default Playground;
