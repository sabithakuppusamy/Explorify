import { Spin } from "antd";
import React from "react";
import "antd/dist/antd.css";

const SpinnerLoading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] z-20 bg-[rgba(0,0,0,0.9)] fixed top-0 left-0 bottom-0 right-0">
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default SpinnerLoading;
