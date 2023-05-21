const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Abdul Rahman",
      email: "abdul@gmail.com",
      picture: "https://i.ibb.co/fvQ0qLF/p-1.jpg",
      review: "Great selection of toys! My kids absolutely love them.",
    },
    {
      id: 2,
      name: "Ahmed Sadi",
      email: "sadia@gmail.com",
      picture: "https://i.ibb.co/0qwVw3b/p-2.jpg",
      review:
        "Amazing customer service and quick delivery. Highly recommended!",
    },
    {
      id: 3,
      name: "Kamal Ahmed",
      email: "kamal@gmail.com",
      picture: "https://i.ibb.co/sjRV7Nz/p-3.jpg",
      review:
        "The toys are of excellent quality. My kids are having a blast playing with them.",
    },
    {
      id: 4,
      name: "Nadir Rahman",
      email: "nadir@gmail.com",
      picture: "https://i.ibb.co/0qwVw3b/p-2.jpg",
      review:
        "I recently purchased some toys from KidzCarZone, and I must say they exceeded my expectations. The toys are not only fun but also safe for my children. The website is user-friendly, and the ordering process was smooth. The toys arrived promptly, and my kids couldn't be happier. Thank you, KidzCarZone!",
    },
    {
      id: 5,
      name: "Akash Khan",
      email: "akash@gmail.com",
      picture: "https://i.ibb.co/fvQ0qLF/p-1.jpg",
      review:
        "Excellent variety of toys and great prices. My children are thrilled!",
    },
    {
      id: 6,
      name: "Rahim Ali",
      email: "rahim@gmail.com",
      picture: "https://i.ibb.co/0qwVw3b/p-2.jpg",
      review:
        "I am impressed with the quality and durability of the toys. KidzCarZone is the go-to place for toy shopping.",
    },
  ];

  return (
    <div className="my-16">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          User Reviews
        </h2>
        <div className="w-1/2 md:w-1/3 h-1 mx-auto bg-gradient-to-r from-purple-700 to-indigo-300"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
        {reviews.map((review) => (
          <div key={review.id} className="max-w-sm mx-auto mb-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <img
                src={review.picture}
                alt={review.name}
                className="w-full h-40 sm:h-60 object-cover object-center"
              />
              <div className="py-4 px-6">
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <p className="text-gray-600">{review.email}</p>
                <blockquote className="italic mt-4">
                  "{review.review}"
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
