import { Outlet } from "react-router-dom";
import classes from "./root.module.css";
import Logo from "../assets/Combined_Shape.svg";
import ProfileImg from "../assets/Oval.png";

function Root() {
  return (
    <main className={classes.main}>
      <div className={classes.bar_left}>
        <div className={classes.top_box}>
          <img src={Logo} alt="logo" className={classes.logo} />
          <div className={classes.bottom_tier}></div>
        </div>
        <div className={classes.bottom_box}>
          <img src={ProfileImg} alt="logo" className={classes.profile_img} />
        </div>
      </div>
      <Outlet />
    </main>
  );
}

export default Root;
