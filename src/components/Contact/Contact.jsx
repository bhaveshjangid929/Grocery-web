import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_trwes4o",
      "template_pcvpixd",
      {
        name: formData.name,
        email: formData.email,
        subject: "Grocify Contact Form",
        message: formData.message,
      },
      {
        publicKey: "acWnXnpMc3ySWC1YN",
      }
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    alert("Message could not be sent. Please try again.");
  }
};

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-2">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Contact <span className="text-green-600">Us</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a question about our fresh products? We are happy to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-green-50 rounded-2xl p-7 sm:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Let's Talk
            </h3>

            <p className="text-gray-600 mb-8">
              We care about your experience. Contact us for any questions or
              suggestions.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-600 text-white p-4 rounded-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600 text-sm">
                  bhaveshjangid929@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-600 text-white p-4 rounded-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600 text-sm">
                  +91 9950380845
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white p-4 rounded-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600 text-sm">
                  Jaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;