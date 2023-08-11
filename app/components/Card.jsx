import React from "react";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div>
      <li>
        <Link href={`repos/${data.name}`}>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <div className="data-details">
            <span>{data.language}</span>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default Card;
