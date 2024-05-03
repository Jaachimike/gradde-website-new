import { useState } from "react";
import Navbar from "./components/ui/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
