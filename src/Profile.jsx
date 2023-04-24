import React from 'react';

const Profile = ({title, description, url}) => {

  return (
    <div>
      <h1>
        {title}
      </h1>
      <hr/>
      <p>{description}</p>
    </div>
  );
};

export default Profile;