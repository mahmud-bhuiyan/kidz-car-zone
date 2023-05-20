const AllToys = () => {
  return (
    <div className="mt-4 mb-8">
      <div
        className="rounded-lg mb-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/WkGzd8f/banner-15.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold  text-sky-400 mt-28">
              All Toys
            </h1>
          </div>
        </div>
      </div>
      <div className="rounded-lg shadow-lg p-6 my-8"></div>
    </div>
  );
};

export default AllToys;
