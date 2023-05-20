import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  return (
    <div>
      <h3>ToyDetails</h3>
    </div>
  );
};

export default ToyDetails;
