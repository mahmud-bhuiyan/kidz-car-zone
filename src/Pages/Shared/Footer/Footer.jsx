import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-10 bg-base-200 text-base-content gap-4">
        <div className="md:col-span-2 md:mr-4">
          <div className="md:ml-28">
            <div className="flex mb-4 items-center">
              <img
                className="h-12 w-12 mr-4 rounded"
                src="https://i.ibb.co/zbHzfxB/kcz-svg.jpg"
                alt="KidzCarZone Logo"
              />
              <p className="text-lg font-semibold">KidzCarZone</p>
            </div>
            <div className="mr-6">
              <p>
                Welcome to KidzCarZone! We offer a wide range of high-quality
                toys that inspire imagination and bring joy to children of all
                ages. Discover endless possibilities and create cherished
                memories with our exceptional selection. Happy playing!
              </p>
            </div>
          </div>
        </div>

        <div className="md:mt-8">
          <h2 className="footer-title">Links</h2>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/" className="link link-hover">
            All Toys
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/" className="link link-hover">
            Terms and Conditions
          </Link>
        </div>
        <div className="md:mt-8">
          <h2 className="footer-title">Contact Us</h2>
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

        <div className="md:mt-8">
          <h2 className="footer-title">Follow Us</h2>
          <a className="link link-hover" rel="noopener noreferrer">
            <FaFacebook className="inline mr-2" />
            Facebook
          </a>
          <a className="link link-hover" rel="noopener noreferrer">
            <FaInstagram className="inline mr-2" />
            Instagram
          </a>
          <a className="link link-hover" rel="noopener noreferrer">
            <FaTwitter className="inline mr-2" />
            Twitter
          </a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="mx-auto text-center">
          <span>
            &copy; {new Date().getFullYear()} KidzCarZone. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
