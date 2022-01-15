import { Link } from "react-router-dom";

// import logo from "../../assets/Logo.png";

function Navbar() {
  return (
    <div className="flex-col">
       <Link to="/home">
      {/* <img src={logo} alt="logo de Nelson" /> */}
      test
      </Link>
      <ul className="flex-col text-white text-3xl text-center cursor-pointer">
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/home">Accueil</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/">A Propos</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/skills">Compétences</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/projects">Portfolio</Link>
        </li>
        <li className="mt-12 hover:text-[#1B2271] hover:text-4xl transition ease-in-out duration-400">
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
