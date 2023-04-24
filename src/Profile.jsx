import React from 'react';

const Profile = ({title, description, url}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={url} alt=""/>
    </div>
  );
};

export default Profile;