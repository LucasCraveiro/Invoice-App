import { Link } from "react-router-dom";
import ArrowBack from "../../assets/arrowBack.svg";
import classes from "./GoBack.module.css";

const GoBack = () => {
  return (
    <div className={classes.go_back}>
      <Link to={"/"} className={classes.arrow_link}>
        <img src={ArrowBack} alt="logo" className={classes.arrow} />
        <p className={classes.back}>Go back</p>
      </Link>
    </div>
  );
};

export default GoBack;
