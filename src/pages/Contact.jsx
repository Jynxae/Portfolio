import React, { useState } from "react";

const fieldStyle = {
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-mono)",
  fontSize: 14,
  padding: "10px 12px",
  background: "#FFFDF4",
  border: "2px solid #AD8B73",
  borderRadius: 3,
  color: "#6B5240",
  outline: "none",
  resize: "vertical",
};

function FormField({ label, value, onChange, textarea, type = "text" }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "#8C6E57",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: 6,
        }}
      >
        &gt; {label}
      </div>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={4}
          style={fieldStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          style={fieldStyle}
          required
        />
      )}
    </div>
  );
}

function Line({ k, v, last }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "6px 0",
        borderBottom: last ? 0 : "1px dashed #EADFC0",
      }}
    >
      <span
        style={{
          color: "#C49673",
          fontFamily: "var(--font-mono)",
          fontSize: 13,
        }}
      >
        {k}
      </span>
      <span
        style={{
          color: "#8C6E57",
          fontWeight: 600,
          fontFamily: "var(--font-mono)",
          fontSize: 13,
        }}
      >
        {v}
      </span>
    </div>
  );
}

function Button({ children, type = "button", onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 14,
        fontWeight: 500,
        padding: "10px 20px",
        border: 0,
        borderRadius: 4,
        cursor: "pointer",
        background: hover ? "#CEAB93" : "#AD8B73",
        color: "#FFFDF4",
        boxShadow: hover ? "0 4px 10px -2px #8C6E5733" : "0 2px 0 0 #8C6E5733",
        transition: "all 200ms",
      }}
    >
      {children}
    </button>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/aollgykb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "96px 80px 120px",
        background: "#FFFBE9",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#C49673",
              marginBottom: 8,
            }}
          >
            04 / 04
          </div>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 44,
              fontWeight: 700,
              color: "#AD8B73",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#C49673", marginRight: 10 }}>&gt;</span>
            Contact
          </h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                lineHeight: 1.5,
                color: "#6B5240",
                margin: "0 0 28px 0",
              }}
            >
              Say hi!{" "}
              <span style={{ color: "#AD8B73", fontWeight: 600 }}>:D</span>
              <br />
              Always up for coffee, a project chat, or a space-podcast rec.
            </p>
            <div
              style={{
                background: "#FFFDF4",
                border: "1px solid #EADFC0",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <Line k="email" v="realkhalily@hotmail.com" />
              <Line
                k="github"
                v={
                  <a
                    href="https://github.com/Jynxae"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#8C6E57", textDecoration: "underline" }}
                  >
                    github.com/Jynxae
                  </a>
                }
              />
              <Line
                k="linkedin"
                v={
                  <a
                    href="https://www.linkedin.com/in/reem-alkhalily-9a9152250/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#8C6E57", textDecoration: "underline" }}
                  >
                    linkedin.com/in/reem-alkhalily
                  </a>
                }
                last
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <FormField label="name" value={form.name} onChange={set("name")} />
            <FormField
              label="email"
              value={form.email}
              onChange={set("email")}
              type="email"
            />
            <FormField
              label="message"
              value={form.message}
              onChange={set("message")}
              textarea
            />
            <div
              style={{
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <Button type="submit">
                {status === "success" ? "✓ Sent" : "Send →"}
              </Button>
              {status === "success" && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "#7A8A5C",
                  }}
                >
                  ● Email sent successfully!
                </span>
              )}
              {status === "error" && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "#B5643A",
                  }}
                >
                  ● Failed to send. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
