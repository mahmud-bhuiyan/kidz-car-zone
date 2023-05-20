import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "daisyui/dist/full.css";
import "./AllToys.css";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const filterToys = () => {
    if (searchQuery) {
      return allToys.filter((toy) =>
        toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return allToys;
  };

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
          <div className="mb-4 md:flex align-middle justify-center">
            <label
              htmlFor="searchInput"
              className="block text-lg font-medium mr-3 pt-2"
            >
              Search Toy By Name:
            </label>
            <input
              id="searchInput"
              type="text"
              placeholder="Enter toy name..."
              className="px-4 py-2 rounded-lg border border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

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
              {filterToys()
                .slice(0, 20)
                .map((toy, index) => (
                  <AllToysRow
                    key={toy._id}
                    index={index}
                    toy={toy}
                  ></AllToysRow>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
