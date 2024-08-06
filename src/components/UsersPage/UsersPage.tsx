import React from "react";
import "./UsersPage.css";

interface UsersPageProps {
  labels: string[];
}

const UsersPage: React.FC<UsersPageProps> = (props) => {
  const { labels } = props;
  return (
    <>
      <div className="user-container">
        <div className="user-alignLabels">
          {labels.map((label, index) => {
            return (
              <p key={index} className="user-labels">
                {label}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
