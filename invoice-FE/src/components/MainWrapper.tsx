import classes from "./MainWrapper.module.css";
import { MainWrapperProps } from "../types";

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return <div className={classes.main_card}>{children}</div>;
};

export default MainWrapper;
