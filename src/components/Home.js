import wel from "../assets/WELCOME.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <div className="Home">
      <img className="Zork" src={wel} alt="logo" />
      <Link style={{ textDecoration: "none"}} to="/game">
        <button className="btn">Proceed to game</button>
      </Link>
      </div>
    </>
  );
}

export default Home;
