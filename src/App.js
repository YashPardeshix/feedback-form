import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [suggestion, setSuggestion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, email, phone, answer, suggestion });

    setName("");
    setEmail("");
    setPhone("");
    setAnswer("");
    setSuggestion("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <NameComponent name={name} setName={setName} />
      <EmailComponent email={email} setEmail={setEmail} />
      <PhoneComponent phone={phone} setPhone={setPhone} />
      <QuestionComponent answer={answer} setAnswer={setAnswer} />
      <SuggestionComponent
        suggestion={suggestion}
        setSuggestion={setSuggestion}
      />
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

function NameComponent({ name, setName }) {
  return (
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
  );
}

function EmailComponent({ email, setEmail }) {
  return (
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  );
}

function PhoneComponent({ phone, setPhone }) {
  return (
    <div className="form-group">
      <label>Phone</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}

function QuestionComponent({ answer, setAnswer }) {
  return (
    <div className="form-group">
      <p>Are you satisfied with our services?</p>
      <label>
        <input
          type="radio"
          name="satisfaction"
          value="yes"
          checked={answer === "yes"}
          onChange={(e) => setAnswer(e.target.value)}
        />{" "}
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="satisfaction"
          value="no"
          checked={answer === "no"}
          onChange={(e) => setAnswer(e.target.value)}
        />{" "}
        No
      </label>
    </div>
  );
}

function SuggestionComponent({ suggestion, setSuggestion }) {
  return (
    <div className="form-group">
      <p>Do you have any suggestions for us?</p>
      <textarea
        value={suggestion}
        placeholder="Enter your suggestion"
        onChange={(e) => setSuggestion(e.target.value)}
      />
    </div>
  );
}

export default App;
