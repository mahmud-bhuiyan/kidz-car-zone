const AllToysRow = ({ index, toy }) => {
  const { sellerName, toyName, subCategory, price, availableQuantity } = toy;
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
          <button className="btn btn-sm btn-primary">View Details</button>
        </td>
      </tr>
    </>
  );
};

export default AllToysRow;
