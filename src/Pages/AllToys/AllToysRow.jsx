import { Link } from "react-router-dom";

const AllToysRow = ({ index, toy }) => {
  const { _id, sellerName, toyName, subCategory, price, availableQuantity } =
    toy;
  return (
    <>
      <tr>
        <td className="px-4 py-2">{index + 1}</td>
        <td className="px-4 py-2">{sellerName}</td>
        <td className="px-4 py-2">{toyName}</td>
        <td className="px-4 py-2">{subCategory}</td>
        <td className="px-4 py-2">{price}</td>
        <td className="px-4 py-2">{availableQuantity}</td>
        <td className="px-4 py-2">
          <Link to={`/toyDetails/${_id}`}>
            <button className="mr-2 px-3 py-2 bg-blue-600 rounded-lg text-white">
              View Details
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllToysRow;
