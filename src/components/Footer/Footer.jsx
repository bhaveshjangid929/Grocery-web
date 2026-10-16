import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubscribe = () => {
  if (!email.trim()) {
    setMessage("Please enter your email.");
    setEmail("")
    
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setMessage("Please enter a valid email.");
    setTimeout(() => {
      setMessage("")
    }, 4000);
    return;
  }

  setMessage("Email submitted successfully!");
  setEmail("");
  setTimeout(() => {
      setMessage("")
    }, 4000);
};
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-10 max-w-[1400px] mx-auto px-10 ">
        <div className="flex-1 basis-[300px]">
          <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        <p className="text-zinc-600 mt-6 max-w-[350px]">
          Bred for a high content of beneficial substances.Our products are all fresh and healthy.
        </p>

        <p className="text-zinc-800 mt-6">
          2026 &copy; all rights reserved.
        </p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold ">Company</h5>
          </li>

          <li className="mt-6">
            <a href="/#about" className="text-zinc-800 hover:text-orange-500">About</a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">FAQ's</a>
          </li>
          
        </ul>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold ">Support</h5>
          </li>

          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">Support Center</a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">Feedback</a>
          </li>
          <li className="mt-6">
            <a href="/#contact" className="text-zinc-800 hover:text-orange-500">Contact Us</a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold ">Stay Connected</h5>

          <p className="mt-6 text-zinc-600">Questions or Feedbacks?<br/>we'd love to hear from you.</p>
          
          <div className="flex p-1 rounded-lg mt-6 bg-white">
  <input
    type="email"
    placeholder="Email Address"
    name="email"
    autoComplete="off"
    className="h-[5vh] pl-4 flex-1 min-w-0 focus:outline-none"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      setMessage("");
    }}
  />

  <button
    type="button"
    onClick={handleSubscribe}
    className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer"
  >
    <IoIosArrowForward />
  </button>
  
</div>
{message && (
  <p
    className={`mt-2 text-sm ${
      message === "Email submitted successfully!"
        ? "text-green-600"
        : "text-red-500"
    }`}
  >
    {message}
  </p>
)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
