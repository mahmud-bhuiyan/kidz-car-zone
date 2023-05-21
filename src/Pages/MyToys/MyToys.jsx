import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState();

  const url = `http://localhost:5000/myToys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return (
    <div>
      <h3>myToys:{myToys?.length} </h3>
    </div>
  );
};

export default MyToys;
