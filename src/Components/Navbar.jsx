import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/curriculum">Our Curriculum</Link>
      <Link to="/reviews">Customer Reviews</Link>
    </nav>
  );
};

export default Navbar;
