import { useState } from "react";
import Navbar from "./components/ui/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/ui/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
