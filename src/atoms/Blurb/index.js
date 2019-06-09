import React from "react";
import "./_styles.scss";

const Blurb = props => {
  const { blurb } = props;

  return (
    <div className="blurb">
      {blurb &&
        blurb.map(line => (
          <div key={line} className="line">
            {line}
          </div>
        ))}
    </div>
  );
};

export default Blurb;
