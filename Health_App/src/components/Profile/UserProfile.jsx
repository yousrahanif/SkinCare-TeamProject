import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
const UserProfile = () => {
    const { user } = useContext(AuthContext);
  
    return (
      <div className="user-profile">
        {user && <p>Email: {user.email}</p>}
      </div>
    );
  };
  
  export default UserProfile;