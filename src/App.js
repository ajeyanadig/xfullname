import { useState } from "react";

function App() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [resString, setResString] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setResString(`Full Name: ${fname} ${lname}`);
  }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ display: "block" }}>
          Submit
        </button>
      </form>
      <p>Full Name: {resString}</p>
    </div>
  );
}

export default App;
