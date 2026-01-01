import React from "react";

const BookAMeetingForm = () => {
  return (
    <>
      <form className="form-wrapper style-one">
        <div className="form-group mb-12">
          <input
            type="text"
            className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
            placeholder="Name"
          />
        </div>
        <div className="form-group mb-12">
          <input
            type="text"
            className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
            placeholder="Email"
          />
        </div>
        <div className="form-group mb-12">
          <input
            type="text"
            className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
            placeholder="Real Estate"
          />
        </div>
        <div className="form-group mb-12">
          <textarea
            className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
            placeholder="Message"
          ></textarea>
        </div>

        <button className="btn style-one d-block w-100">
          <span className="btn-text d-block w-100 fw-semibold position-relative transition">
            Submit Message
          </span>
        </button>
      </form>
    </>
  );
};

export default BookAMeetingForm;
