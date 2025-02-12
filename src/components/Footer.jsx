import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ width: "100%", height: "300px" }}
      className=" d-flex align-items-center justify-content-evenly flex-column"
    >
      <div className="footer d-flex gap-5">
        <div className="website" style={{ maxWidth: "350px" }}>
          <h4>
            <i className="fa-solid fa-video fs-3 me-3 text-warning"></i>
            Video Player
          </h4>
          <h6>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla, deserunt!
          </h6>
        </div>
        <div className="links d-flex flex-column ">
          <h4>Links</h4>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Landing Page
          </Link>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <Link
            to="/watchhistory"
            style={{ textDecoration: "none", color: "white" }}
          >
            watch History
          </Link>
        </div>
        <div className="guides d-flex flex-column ">
          <h4>Guides</h4>
          <Link
            to="https://www.react.org/"
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to="https://react-bootstrap.netlify.app/"
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>
          <Link
            to="https://bootswatch.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Bootstrap Watch
          </Link>
        </div>
        <div className="contact">
          <h4>Contact Us </h4>
          <div className="d-flex gap-3">
            <input className="form-control " type="text"  placeholder="Enter the Email"/>
            <button className="btn btn-warning ">Subscribe</button>
          </div>
          <div className="d-flex gap-5 mt-4 ps-4">
            <i class="fa-brands fa-instagram fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
            <i class="fa-brands fa-linkedin fa-2x"></i>
            <i class="fa-brands fa-facebook fa-2x"></i>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        {" "}
        copyright @ 2023 media player built with reat
      </p>
    </div>
  );
};
export default Footer;
