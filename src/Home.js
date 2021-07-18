import wel from "./assets/WELCOME.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <img className="Zork" src={wel} alt="logo" />
      <Link style={{ textDecoration: "none"}} to="/game">
        <button className="btn">Proceed to game</button>
      </Link>
    </>
  );
}

export default Home;
