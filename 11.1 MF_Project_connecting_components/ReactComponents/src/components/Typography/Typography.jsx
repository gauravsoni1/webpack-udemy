import React from "react";
import './Typography.scss';

const Typography = ({ type, text }) => {
  const renderTypography = () => {
    switch (type) {
      case "title":
        return <span className="title">{text}</span>;
      case "paragraph":
        return <span className="paragraph">{text}</span>;
      default:
        return <span>{text}</span>;
    }
  };

  return <>{renderTypography()}</>;
};

export default Typography;
