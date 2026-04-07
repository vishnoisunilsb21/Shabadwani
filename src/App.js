import { useState } from "react";
import Shabads from "./Shabads";
import "./styles.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = Shabads.filter((s) =>
    s.title.includes(search)
  );

  return (
    <div className="container">
      <h1>📖 Bishnoi Sabadwani</h1>

      {!selected ? (
        <>
          <input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />

          {filtered.map((s) => (
            <div
              key={s.id}
              className="card"
              onClick={() => setSelected(s)}
            >
              {s.title}
            </div>
          ))}
        </>
      ) : (
        <>
          <button onClick={() => setSelected(null)}>Back</button>
          <h2>{selected.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>
            {selected.content}
          </p>
        </>
      )}
    </div>
  );
}

export default App;
