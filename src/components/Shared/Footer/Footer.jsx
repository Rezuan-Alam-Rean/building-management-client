/* eslint-disable react/no-unescaped-entities */


const Footer = () => {
    return (
        <div>
           <footer className=" mt-10">
  <footer className="footer p-10 bg-slate-800  justify-evenly text-white">
    <nav>
      <h6 className="footer-title">Explore</h6>
      <a className="link link-hover">Rooms & Suites</a>
      <a className="link link-hover">Dining</a>
      <a className="link link-hover">Spa & Wellness</a>
      <a className="link link-hover">Activities</a>
    </nav>
    <nav>
      <h6 className="footer-title">About</h6>
      <a className="link link-hover">Our Story</a>
      <a className="link link-hover">Gallery</a>
      <a className="link link-hover">Location</a>
      <a className="link link-hover">Sustainability</a>
    </nav>
    <nav>
      <h6 className="footer-title">Support</h6>
      <a className="link link-hover">FAQs</a>
      <a className="link link-hover">Customer Service</a>
      <a className="link link-hover">Booking Policy</a>
      <a className="link link-hover">Contact Us</a>
    </nav>
    <form>
      <h6 className="footer-title">Stay Updated</h6>
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text">Subscribe to our newsletter</span>
        </label>
        <div className="join">
          <input type="text" placeholder="email@seaparadise.com" className="input input-bordered join-item" />
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  <div className="p-4 footer-center bg-slate-700 text-white">
    <div>
      <p>Copyright © 2023 - All rights reserved by
        SEA PARADISE Resorts</p>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;