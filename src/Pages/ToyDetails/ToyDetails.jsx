import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);

  const {
    availableQuantity,
    detailDescription,
    email,
    picture,
    price,
    rating,
    sellerName,
    subCategory,
    toyName,
  } = toyDetails;

  return (
    <>
      <div className="mt-4 mb-8">
        <div
          className="rounded-lg mb-4 drop-shadow-xl"
          style={{
            backgroundImage: `url("https://i.ibb.co/74r4d3g/banner-11.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-black bg-sky-200 px-8 pt-4 pb-6 rounded-lg mt-20">
                Details of: {toyName}
              </h1>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-6 my-10">
          <img
            src={picture}
            alt={toyName}
            className="rounded-xl mx-auto w-60 mb-8"
          />

          <div className="overflow-x-auto mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 pb-8">
            <h3 className="font-bold text-4xl text-center mb-8">
              All details of: {toyName}
            </h3>
            <table className="table w-full table-zebra text-center border border-collapse">
              <tbody>
                <tr>
                  <td className="font-bold border">Toy Name</td>
                  <td className="border">{toyName}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Seller Name</td>
                  <td className="border">{sellerName}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Seller Email</td>
                  <td className="border">{email}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Sub Category</td>
                  <td className="border">{subCategory}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Rating</td>
                  <td className="border">{rating}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Price</td>
                  <td className="border">{price}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Available Quantity</td>
                  <td className="border">{availableQuantity}</td>
                </tr>
                <tr>
                  <td className="font-bold border">Detail Description</td>
                  <td className="border">{detailDescription}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
