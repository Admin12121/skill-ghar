"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";

const PropertyDetailsContent = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on backdrop (not on modal content)
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="container ptb-120">
        <div className="row">
          <div className="col-xl-8">
            <div className="property-desc">
              <div className="row align-items-center mb-30">
                <div className="col-lg-7 col-md-8 mb-sm-20">
                  <h1 className="font-secondary fw-black mb-0">
                    Loft In Mid-City Paradise
                  </h1>
                </div>
                <div className="col-lg-5 col-md-4 text-md-end">
                  <p className="fw-medium position-relative text-title mb-0">
                    <Image
                      src="/images/icons/pin-orange.svg"
                      alt="Icon"
                      width={14}
                      height={17}
                      className="position-relative top-n2 me-1"
                    />
                    200 Terrace, London
                  </p>
                </div>
              </div>

              <p>
                Indulge in luxury living at our penthouse near downtown, where
                sophistication meets convenience. With breathtaking views and
                contemporary design.
              </p>

              <div className="single-img position-relative round-10 mb-35">
                <Image
                  src="/images/properties/single-property-1.jpg"
                  alt="property"
                  width={1140}
                  height={593}
                  className="round-10"
                />
                <div className="property-price position-absolute end-0 bg_primary text-white z-1">
                  <span className="fw-bold">$546</span>/Month
                </div>
              </div>

              {/* About Property */}
              <div className="single-para">
                <h6>About Property</h6>
                <p>
                  A property deed is a written legal document that transfers
                  ownership of a property from one party to another. It includes
                  essential details such as the names of the current and new
                  owners, a legal description of the property, and the date of
                  the transfer. Deeds are signed by the current owner and
                  typically require witnesses and a notary public to ensure
                  their validity.
                </p>
                <ul className="feature-item-list style-one list-unstyled">
                  <li className="position-relative">
                    <span className="text-title fw-semibold">
                      Warranty Deed:
                    </span>{" "}
                    Guarantees that the seller owns the property free and clear
                    and has the legal right to sell it. Provides the highest
                    level of protection to the buyer.
                  </li>
                  <li className="position-relative">
                    <span className="text-title fw-semibold">
                      Quitclaim Deed:
                    </span>
                     Transfers the seller interest in the property without
                    making any guarantees about the title. Often used in
                    situations where the transfer is between family members or
                    in less formal transactions.
                  </li>
                  <li className="position-relative">
                    <span className="text-title fw-semibold">Grant Deed: </span>
                    Similar to a warranty deed but may not provide as much
                    protection. It implies that the property has not been sold
                    to anyone else
                  </li>
                </ul>
              </div>

              {/* Property Video */}
              <div className="single-para">
                <h6>Property Video</h6>
                <div
                  className="single-property-video position-relative z-1 round-10 mt-4"
                  style={{
                    backgroundImage:
                      "url(/images/properties/single-property-2.jpg)",
                  }}
                >
                  <button
                    type="button"
                    className="play-icon position-absolute d-flex flex-column align-items-center justify-content-center rounded-circle bg_primary"
                    onClick={() => setShowModal(true)}
                  >
                    <i className="ri-play-large-fill"></i>
                  </button>
                </div>
              </div>

              {/* Property Amenities */}
              <div className="single-para">
                <h6>Property Amenities</h6>
                <ul className="single-property-amenities d-flex flex-wrap  justify-content-between list-unstyled mb-0">
                  <li className="position-relative">7 Bedrooms</li>
                  <li className="position-relative">Gym for all</li>
                  <li className="position-relative">Air Conditioning</li>
                  <li className="position-relative">3 Garage</li>
                  <li className="position-relative">CC Camera</li>
                  <li className="position-relative">Internet</li>
                  <li className="position-relative">Security System</li>
                  <li className="position-relative">Swimming Pool</li>
                  <li className="position-relative">Dishwasher</li>
                  <li className="position-relative">Clinic</li>
                  <li className="position-relative">Fencing</li>
                  <li className="position-relative">Supermarket</li>
                  <li className="position-relative">Outdoor Kitchen</li>
                  <li className="position-relative">Refrigerator</li>
                  <li className="position-relative">Indoor Game</li>
                </ul>
              </div>

              {/* Location */}
              <div className="single-para">
                <h6>Location</h6>
                <div className="single-img round-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.3601905856394!2d-82.56683402358755!3d35.59418067261548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598cabc5d2aa19%3A0x77a521e306ba9845!2sHill%20St%2C%20Asheville%2C%20NC%2C%20USA!5e0!3m2!1sen!2sbd!4v1757588384922!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Comment Lists */}
              <div className="single-para article-comment">
                <h3 className="title">Comment (3)</h3>

                <div className="comment-list">
                  <div className="comment-author d-flex align-items-center gap-3">
                    <Image
                      src="/images/users/user1.png"
                      alt="user1"
                      width={57}
                      height={57}
                    />
                    <div>
                      <h5>Jonathan Chancellor</h5>
                      <p>December 18, 2025</p>
                    </div>
                  </div>

                  <div className="rating mb-8 lh-1">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam lectus purus ultricies neque. Aenean nunc nisi, vel
                    dictum.adipiscing elit.
                  </p>
                  
                  <button
                    type="button"
                    className="comment-reply-link border-0"
                    style={{ fontSize: "14px" }}
                  >
                    Reply
                  </button>

                  <div className="comment-list reply">
                    <div className="comment-author d-flex align-items-center gap-3">
                      <Image
                        src="/images/users/user2.png"
                        alt="user2"
                        width={57}
                        height={57}
                      />
                      <div>
                        <h5>Admin</h5>
                        <p>December 18, 2025</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Diam lectus purus ultricies neque. Aenean nunc nisi, vel
                      dictum.adipiscing elit.
                    </p>
                    <button
                      type="button"
                      className="comment-reply-link border-0"
                      style={{ fontSize: "14px" }}
                    >
                      Reply
                    </button>
                  </div>
                </div>

                <div className="comment-list">
                  <div className="comment-author d-flex align-items-center gap-3">
                    <Image
                      src="/images/users/user3.png"
                      alt="user3"
                      width={57}
                      height={57}
                    />
                    <div>
                      <h5>Jhon Smith</h5>
                      <p>December 18, 2025</p>
                    </div>
                  </div>
                  <div className="rating mb-8 lh-1">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam lectus purus ultricies neque. Aenean nunc nisi, vel
                    dictum.adipiscing elit.
                  </p>
                  <button
                    type="button"
                    className="comment-reply-link border-0"
                    style={{ fontSize: "14px" }}
                  >
                    Reply
                  </button>
                </div>
              </div>

              {/* Comment form */}
              <form className="comment-form style-two bg-gray form-wrapper style-one round-10">
                <h4 className="fs-20 fw-bold text-title mb-20">
                  Be the first to review “Affordable Green Villa House”
                </h4>

                <div className="form-group position-relative mb-15">
                  <input
                    type="text"
                    required
                    className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
                    placeholder="Review Title"
                  />
                </div>

                <div className="form-group mb-15">
                  <span className="fw-medium d-block text-title">
                    Your rating
                  </span>
                  <div className="add-star-rating d-flex flex-wrap justify-content-start mt-1">
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label htmlFor="star1"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label htmlFor="star2"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label htmlFor="star3"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label htmlFor="star4"></label>
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label htmlFor="star5"></label>
                  </div>
                </div>

                <div className="form-group mb-15">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
                  />
                </div>

                <div className="form-group mb-15">
                  <textarea
                    name="messages"
                    id="messages"
                    rows={5}
                    placeholder="Your review"
                    className="w-100 ht-152 bg-white border-0 outline-0 round-5 text-para resize-0"
                  ></textarea>
                </div>

                <div className="form-check checkbox style-one mb-25">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="test_2"
                  />
                  <label
                    className="form-check-label fw-medium"
                    htmlFor="test_2"
                  >
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <button className="btn style-one d-inline-flex flex-wrap align-items-center p-0">
                  <span className="btn-text d-inline-block fw-semibold position-relative transition">
                    Submit Review
                  </span>
                  <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                    <i className="ri-arrow-right-up-line"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="col-xl-4">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          onClick={handleBackdropClick}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-header border-0 p-0">
                <button
                  type="button"
                  className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/u31qwQUeGuM?si=bQFS7owGBv75M14M"
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal Backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default PropertyDetailsContent;
