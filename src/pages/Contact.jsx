import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://getform.io/f/aollgykb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#FFFBE9] py-2 w-screen">
      <h2 className="text-[#AD8B73] text-6xl pt-24 pl-24">&gt; Contact</h2>
      <form onSubmit={handleSubmit} className="pl-32">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block mb-4 p-2 border-2 border-[#AD8B73]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block mb-4 p-2 border-2 border-[#AD8B73]"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block w-72 mb-4 p-2 border-2 border-[#AD8B73]"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="block p-2 bg-[#AD8B73] text-white">
          Send
        </button>

        {/* Display status message */}
        {status && <p className="mt-4 text-green-500">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
