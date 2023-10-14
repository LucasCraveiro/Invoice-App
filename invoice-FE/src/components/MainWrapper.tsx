import classes from "./MainWrapper.module.css";

type MainWrapperProps = {
  children: React.ReactNode;
};
const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return <div className={classes.main_card}>{children}</div>;
};

export default MainWrapper;
