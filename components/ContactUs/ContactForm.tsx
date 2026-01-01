import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="container pb-120">
        <div className="row align-items-lg-start align-items-center">
          <div className="col-lg-6 mb-md-20">
            <h2 className="section-title style-one text-title mb-30">
              Contact{" "}
              <span className="fw-black">Edifico Today And Take The First</span>{" "}
              Step Forward
            </h2>

            <form className="comment-form form-wrapper round-10 p-0 mb-50">
              <div className="row gx-xl-3">
                <div className="col-md-6">
                  <div className="form-group position-relative mb-25">
                    <input
                      type="text"
                      required
                      className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mb-25">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-25">
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-25">
                    <textarea
                      name="messages"
                      id="messages"
                      rows={10}
                      placeholder="Comment"
                      className="w-100 ht-152 bg-gray border-0 outline-0 round-5 text-para resize-0"
                    ></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check checkbox style-one mb-25">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="test_2"
                    />
                    <label className="form-check-label" htmlFor="test_2">
                      Accept Terms of Services and Privacy Policy
                    </label>
                  </div>

                  <div className="col-xl-5 col-md-6">
                    <button className="btn style-one d-inline-flex flex-wrap align-items-center p-0">
                      <span className="btn-text d-inline-block fw-semibold position-relative transition">
                        Send Message
                      </span>
                      <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 ps-xxl-5">
            <div className="comp-map round-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.633897069592!2d-72.06176842322485!3d44.54312817107391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb434034d654acf%3A0xd3f30445e8230f9a!2s401%20Town%20Hwy%2024%2C%20Lyndonville%2C%20VT%2005851%2C%20USA!5e0!3m2!1sen!2sbd!4v1757832399321!5m2!1sen!2sbd"
                title="Map"
                width="100%"
                height="550"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
