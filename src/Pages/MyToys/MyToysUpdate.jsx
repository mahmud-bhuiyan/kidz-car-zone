import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysUpdate = () => {
  const toy = useLoaderData();
  console.log(toy);

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

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const picture = form.picture.value;
    const toyName = form.toy_name.value;
    const sellerName = form.seller_name.value;
    const email = form.email.value;
    const subCategory = form.sub_category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.available_quantity.value;
    const detailDescription = form.detail_description.value;

    const updatedToy = {
      picture,
      toyName,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      availableQuantity,
      detailDescription,
    };
    console.log(updatedToy);

    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: "Error!",
          text: "An error occurred",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

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
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold text-black bg-sky-200 px-8 pt-4 pb-6 rounded-lg mt-20">
                Update a Toy
              </h1>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-6 my-10">
          <form onSubmit={handleUpdateToy} className="m-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  name="toy_name"
                  defaultValue={toyName}
                  placeholder="Toy Name"
                  className="input input-sm input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Picture URL</span>
                </label>
                <input
                  type="text"
                  name="picture"
                  defaultValue={picture}
                  placeholder="Picture URL"
                  className="input input-sm input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  name="seller_name"
                  defaultValue={sellerName}
                  placeholder="Seller Name"
                  className="input input-sm input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Seller Email"
                  className="input input-sm input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  name="sub_category"
                  defaultValue={subCategory}
                  placeholder="Seller Email"
                  className="input input-sm input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-sm input-bordered"
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-sm input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  name="available_quantity"
                  defaultValue={availableQuantity}
                  placeholder="Available Quantity"
                  className="input input-sm input-bordered"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail Description</span>
                </label>
                <textarea
                  name="detail_description"
                  defaultValue={detailDescription}
                  placeholder="Detail Description"
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-8">
                <input
                  className="btn btn-sm btn-block btn-primary"
                  type="submit"
                  value="Update Toy"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyToysUpdate;
