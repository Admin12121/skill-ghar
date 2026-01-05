"use client";

import React, { useState, FormEvent } from "react";
import confetti from "canvas-confetti";

interface Service {
  slug: string;
  title: string;
}

interface ContactFormProps {
  services: Service[];
}

const triggerConfetti = () => {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
};

const ContactForm = ({ services }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const subjectLine = formData.service === "other" ? formData.subject : formData.service;
      
      const response = await fetch("/api/mailme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: subjectLine,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        triggerConfetti();
        setStatus({
          type: "success",
          message: "Message sent successfully! We will reach out soon to you.",
        });
        setFormData({
          name: "",
          email: "",
          service: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

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

            <form
              className="comment-form form-wrapper round-10 p-0 mb-50"
              onSubmit={handleSubmit}
            >
              <div className="row gx-xl-3">
                <div className="col-md-6">
                  <div className="form-group position-relative mb-25">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                      placeholder="Name"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mb-25">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-25">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value, subject: "" })}
                      className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                      disabled={loading}
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {formData.service === "other" && (
                  <div className="col-12">
                    <div className="form-group mb-25">
                      <input
                        type="text"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-100 ht-50 bg-gray border-0 outline-0 round-5 text-para"
                        disabled={loading}
                      />
                    </div>
                  </div>
                )}

                <div className="col-12">
                  <div className="form-group mb-25">
                    <textarea
                      name="messages"
                      id="messages"
                      rows={10}
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-100 ht-152 bg-gray border-0 outline-0 round-5 text-para resize-0"
                      disabled={loading}
                    ></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="col-xl-5 col-md-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn style-one d-inline-flex flex-wrap align-items-center p-0"
                    >
                      <span className="btn-text d-inline-block fw-semibold position-relative transition">
                        {loading ? "Sending..." : "Send Message"}
                      </span>
                      <span className="btn-icon position-relative d-flex flex-column align-items-center justify-content-center rounded-circle transition">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </button>
                  </div>
                </div>

                {status.message && (
                  <div className="col-12 mt-3">
                    <div
                      className={`alert ${
                        status.type === "success" ? "alert-success" : "alert-danger"
                      } p-3 round-5`}
                      style={{
                        backgroundColor: status.type === "success" ? "#d4edda" : "#f8d7da",
                        color: status.type === "success" ? "#155724" : "#721c24",
                        border: `1px solid ${status.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                        borderRadius: "5px",
                      }}
                    >
                      {status.message}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="col-lg-6 ps-xxl-5">
            <div className="comp-map round-20">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.3390,27.7170,85.3510,27.7230&layer=mapnik&marker=27.720021,85.345014"
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
