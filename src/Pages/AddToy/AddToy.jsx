import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
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

    const newToy = {
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
    console.log(newToy);

    fetch("https://kidz-car-server.vercel.app/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
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
    <div className="mt-4 mb-8">
      <div
        className="rounded-lg mb-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/3rpYzjd/addatoy.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold text-black bg-slate-200 px-4 pt-3 pb-5 rounded-lg mt-24">
              Add a Toy
            </h1>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-lg p-6">
        <form onSubmit={handleAddToy} className="m-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toy_name"
                placeholder="Toy Name"
                className="input input-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <input
                type="text"
                name="picture"
                placeholder="Picture URL"
                className="input input-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="seller_name"
                defaultValue={user?.displayName}
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
                defaultValue={user?.email}
                placeholder="Seller Email"
                className="input input-sm input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <select
                name="sub_category"
                className="select select-sm select-bordered"
                required
              >
                <option value="">Select Sub Category</option>
                <option value="sports_car">Sports Car</option>
                <option value="truck">Truck</option>
                <option value="regular_car">Regular Car</option>
                <option value="mini_fire_truck">Mini Fire Truck</option>
                <option value="mini_police_car">Mini Police Car</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-sm input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
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
                placeholder="Detail Description"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div className="form-control mt-8">
              <input
                className="btn btn-sm btn-block btn-primary"
                type="submit"
                value="Add Toy"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
