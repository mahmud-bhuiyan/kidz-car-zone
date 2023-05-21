import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="bg-cover bg-opacity-50 min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/PhtJp93/contact-us.png')",
      }}
    >
      <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-8 md:p-10 max-w-lg mx-auto md:ml-16  md:flex items-center justify-center">
        <form className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Contact Us
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
        <div className="md:w-1/2 md:ml-8">
          <div className="mt-4 md:mt-8">
            <h2 className="footer-title">Contact Info</h2>
            <p>
              <FaRegEnvelope className="inline mr-2" />
              info@kidzcarzone.com
            </p>
            <p>
              <FaPhoneAlt className="inline mr-2" />
              +880 123-456-7890
            </p>
            <p>
              <FaMapMarkerAlt className="inline mr-2" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
