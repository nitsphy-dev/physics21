import { CircularProgress } from "@material-ui/core";

import "./css/Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <CircularProgress className="loader" />
    </div>
  );
};

export default Loading;
