import React from 'react';

const TreeCard = (props) => {
  const {heading, ...rest} = props;

  return (
      <div className="imageContainer">
        <img {...rest} alt={rest.id} />
        <h1>{heading}</h1>
      </div>
  );
};

export default TreeCard;
