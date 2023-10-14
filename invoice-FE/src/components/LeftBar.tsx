import classes from "./LeftBar.module.css";
import Logo from "../assets/Combined_Shape.svg";
import ProfileImg from "../assets/Oval.png";

const LeftBar = () => {
  return (
    <div className={classes.bar_left}>
      <div className={classes.top_box}>
        <img src={Logo} alt="logo" className={classes.logo} />
        <div className={classes.bottom_tier}></div>
      </div>
      <div className={classes.bottom_box}>
        <img src={ProfileImg} alt="logo" className={classes.profile_img} />
      </div>
    </div>
  );
};

export default LeftBar;
