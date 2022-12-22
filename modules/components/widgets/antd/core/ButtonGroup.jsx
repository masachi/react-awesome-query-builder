import React from "react";
import {Button, Space} from "antd";

export default ({children, config: {settings}}) => {
  const {renderSize} = settings;
  return <Space
    size={renderSize}
  >{children}</Space>;
};
