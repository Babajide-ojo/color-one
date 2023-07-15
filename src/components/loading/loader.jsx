import React from "react";

import PlaceholderLoading from "react-placeholder-loading";
import "./loader.styles.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div>
        {" "}
        <PlaceholderLoading shape="circle" width={60} height={60} />
      </div>
      <div>
        {" "}
        <PlaceholderLoading shape="circle" width={60} height={60} />
      </div>
      <div>
        {" "}
        <PlaceholderLoading shape="circle" width={60} height={60} />
      </div>
      <div>
        {" "}
        <PlaceholderLoading shape="circle" width={60} height={60} />
      </div>
    </div>
  );
};

export default Loader;
