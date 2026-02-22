import "./index.css";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-4xl  text-green-500 font-bold mb-8">Password</p>
      <input
        className="text-center text-4xl pr-10 pl-10 p-2 text-green-500 focus:outline-none focus:ring-0 caret-transparent"
        type="text"
        autoFocus
        value={password}
        onChange={(e) => {
          const val = e.target.value;
          setPassword(val);
          if (val.toLowerCase() === "kedi") {
            window.location.href =
              "https://www.youtube.com/watch?v=UBZDiexPUgE";
          }
        }}
      />
    </div>
  );
}

export default App;
