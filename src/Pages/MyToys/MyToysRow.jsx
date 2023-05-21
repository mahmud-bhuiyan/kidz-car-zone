import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ index, toy, handleDelete }) => {
  const {
    _id,
    availableQuantity,
    detailDescription,
    email,
    picture,
    price,
    rating,
    sellerName,
    subCategory,
    toyName,
  } = toy;

  const [fullDescription, setFullDescription] = useState(false);

  const shortDescription = detailDescription.slice(0, 30);

  const toggleDescription = () => {
    setFullDescription((prev) => !prev);
  };

  return (
    <tr>
      <th className="text-black">{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt={toyName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-70">Rating: {rating}</div>
          </div>
        </div>
      </td>
      <td>{subCategory}</td>
      <td>{availableQuantity}</td>
      <td>{price}</td>
      <td>
        Name: <span className="font-bold">{sellerName}</span>
        <br />
        <span>Email: {email}</span>
      </td>
      <td style={{ whiteSpace: "pre-wrap" }}>
        {fullDescription ? detailDescription : shortDescription}
        {detailDescription.length > 30 && (
          <button className="text-blue-600 ml-2" onClick={toggleDescription}>
            {fullDescription ? "See Less" : "More"}
          </button>
        )}
      </td>
      <td>
        <Link to={`/updateToy/${_id}`}>
          <button className="mr-2 px-3 py-2 bg-blue-600 rounded-lg text-white">
            <FaRegEdit />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="mr-2 px-3 py-2 bg-red-600 rounded-lg text-white"
        >
          <FaRegTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
