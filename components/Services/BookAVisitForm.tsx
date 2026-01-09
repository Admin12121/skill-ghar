"use client";

import { useState, FormEvent } from "react";
import confetti from "canvas-confetti";

interface BookAVisitFormProps {
  serviceName?: string;
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

const BookAVisitForm = ({ serviceName = "" }: BookAVisitFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceName,
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
      const response = await fetch("/api/mailme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Book A Visit Request - ${formData.service}`,
          message: `Service Interested: ${formData.service}\n\nMessage:\n${formData.message}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        triggerConfetti();
        setStatus({
          type: "success",
          message: "Visit request sent successfully! We will contact you soon.",
        });
        setFormData({
          name: "",
          email: "",
          service: serviceName,
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send request. Please try again.",
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
      <div className="sidebar-widget category-widget bg-gray round-10">
        <h3 className="sidebar-widget-title fs-18 fw-semibold text-title mb-15">
          Book A Visit
        </h3>

        <form className="form-wrapper style-one" onSubmit={handleSubmit}>
          <div className="form-group mb-12">
            <input
              type="text"
              className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={loading}
            />
          </div>
          <div className="form-group mb-12">
            <input
              type="email"
              className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={loading}
            />
          </div>
          <div className="form-group mb-12">
            <input
              type="text"
              className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
              placeholder="Service"
              value={formData.service}
              readOnly
              disabled
            />
          </div>
          <div className="form-group mb-12">
            <textarea
              className="w-100 ht-50 bg-white border-0 outline-0 round-5 text-para"
              placeholder="Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              disabled={loading}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn style-one d-block w-100"
          >
            <span className="btn-text d-block w-100 fw-semibold position-relative transition">
              {loading ? "Sending..." : "Submit Message"}
            </span>
          </button>

          {status.message && (
            <div
              className={`alert mt-3 p-3 round-5`}
              style={{
                backgroundColor: status.type === "success" ? "#d4edda" : "#f8d7da",
                color: status.type === "success" ? "#155724" : "#721c24",
                border: `1px solid ${status.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                borderRadius: "5px",
              }}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default BookAVisitForm;
