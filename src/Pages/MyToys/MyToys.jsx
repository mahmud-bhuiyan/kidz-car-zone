import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState();

  const url = `http://localhost:5000/myToys?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remaining);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <div className="mt-4 mb-8 text-center">
      <div
        className="rounded-lg mb-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/vzJqD3r/banner-20.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold text-black bg-slate-200 px-4 pt-4 pb-5 rounded-lg mt-28">
              My Total Toys:({myToys?.length})
            </h1>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-lg p-6 my-8">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra w-full table-bordered rounded-lg text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Toy Info</th>
                <th className="px-4 py-2">Sub-Category</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Seller Info</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myToys?.map((toy, index) => (
                <MyToysRow
                  key={toy._id}
                  index={index}
                  toy={toy}
                  handleDelete={handleDelete}
                ></MyToysRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
