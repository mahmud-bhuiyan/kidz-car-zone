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
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          Popular Products
        </h2>
        <div className="w-1/2 md:w-1/3 h-1 mx-auto bg-gradient-to-r from-purple-700 to-indigo-300 mb-16"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 md:m-2 lg:m-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl mb-4 overflow-hidden relative"
          >
            <figure className="p-4">
              <img
                src={image}
                alt=""
                className="rounded-xl w-full h-auto transition-transform duration-300 transform hover:scale-105"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
