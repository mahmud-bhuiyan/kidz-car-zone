import { useLoaderData } from "react-router-dom";
import "daisyui/dist/full.css";
import "./AllToys.css";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="mt-4 mb-8 text-center">
      <div
        className="rounded-lg mb-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/WkGzd8f/banner-15.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold text-sky-400 mt-28">
              All Toys ({allToys.length})
            </h1>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-lg p-6 my-8">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full table-bordered rounded-lg text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Seller</th>
                <th className="px-4 py-2">Toy Name</th>
                <th className="px-4 py-2">Sub-category</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Available Quantity</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {allToys.slice(0, 20).map((toy, index) => (
                <tr key={toy._id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{toy.sellerName}</td>
                  <td className="px-4 py-2">{toy.toyName}</td>
                  <td className="px-4 py-2">{toy.subCategory}</td>
                  <td className="px-4 py-2">{toy.price}</td>
                  <td className="px-4 py-2">{toy.availableQuantity}</td>
                  <td className="px-4 py-2">
                    <button className="btn btn-sm btn-primary">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
