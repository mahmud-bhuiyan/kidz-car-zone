const Gallery = () => {
  const images = [
    "https://i.ibb.co/3ksn9yY/toy-1.jpg",
    "https://i.ibb.co/6sL4K4w/toy-7.jpg",
    "https://i.ibb.co/2F36Rcf/toy-3.jpg",
    "https://i.ibb.co/WtWdqDF/toy-8.jpg",
    "https://i.ibb.co/Xk7wbQQ/toy-5.jpg",
    "https://i.ibb.co/jhhjL28/toy-6.jpg",
    "https://i.ibb.co/68K3qg2/toy-10.jpg",
    "https://i.ibb.co/S502h3F/toy-11.jpg",
    "https://i.ibb.co/cr7gG7S/toy-14.jpg",
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-purple-600 to-indigo-400 p-6 rounded-xl my-14">
        <div className="mb-6">
          <h2 className="text-4xl text-center font-bold mt-2 mb-8 text-white">
            Popular Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 md:m-2 lg:m-0">
            {images.map((image, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl mb-6 overflow-hidden relative"
              >
                <figure className="p-4">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="rounded-xl w-full h-auto transition-transform duration-300 transform hover:scale-105"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
