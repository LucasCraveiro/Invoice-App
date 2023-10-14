import { Outlet } from "react-router-dom";
import classes from "./root.module.css";
import LeftBar from "../components/LeftBar";

function Root() {
  return (
    <main className={classes.main}>
      <LeftBar />
      <Outlet />
    </main>
  );
}

export default Root;
