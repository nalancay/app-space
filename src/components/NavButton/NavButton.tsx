import { Link } from "react-router-dom";
import { ContainerButtons } from "./NavButton.styles";

const NavButton = () => {
  return (
    <ContainerButtons>
      <Link to="/launchCountdown" className="btn-link">
        Launch countdown
      </Link>
      <Link to="/launches" className="btn-link">
        {" "}
        All upcoming releases
      </Link>
    </ContainerButtons>
  );
};

export default NavButton;
