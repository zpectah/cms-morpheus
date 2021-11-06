import React from "react";

interface BaseSectionProps {
  title?: string;
  beforeChildren?: React.ReactElement | React.ReactElement[];
  afterChildren?: React.ReactElement | React.ReactElement[];
}

const BaseSection: React.FC<BaseSectionProps> = ({ children, beforeChildren, afterChildren, title }) => {

  return (
    <section>
      {title && (
        <div>{title}</div>
      )}
      {beforeChildren && (
        <div>{beforeChildren}</div>
      )}
      <div>
        {children}
      </div>
      {afterChildren && (
        <div>{afterChildren}</div>
      )}
    </section>
  );
};

export default BaseSection;