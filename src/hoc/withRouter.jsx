/* eslint-disable react/display-name */
import { useLocation } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const location = useLocation();
  return <WrappedComponent location={location} {...props} />;
};

export default withRouter;
