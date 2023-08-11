import React from "react";

const RepoDetailCard = ({ data }) => {
  return (
    <div className="detail-block">
      <h3>Details of Repository</h3>
      <div className="detail-card">
        <h4>{data.name}</h4>
        <h5>{data.language}</h5>
        <p>{data.description}</p>
        <p>{data.git_url}</p>
        <p>{data.visibility}</p>
      </div>
    </div>
  );
};

export default RepoDetailCard;
