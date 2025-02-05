import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-start">
          <a className="md:text-2xl text-xl font-semibold  font-orbitron">
            FreezeAid
          </a>
          <p>Address: 123 Charity Lane, Dhaka, Bangladesh</p>
          <p>Email: support@donationplatform.com</p>
          <p>Phone: +880 1234 567 890</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-blue-400 p-2 rounded-full text-white hover:bg-blue-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-pink-500 p-2 rounded-full text-white hover:bg-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <p>© 2024 Freeze Aid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
