import './style.css';
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import API from "../../utils/API";

const Profile = (props) => {
  const [vehicle, setVehicle] = useState({})
  const { loading, user } = useAuth0();

  const { id } = useParams()
  useEffect(() => {
    API.getVehicle(id)

      .then(res => setVehicle(res.data))
      .catch(err => console.log(err));
  })

  if (loading || !user) {
    return <div>Loading...</div>;
  }


  return (
    <div className="containerHome">
      <Fragment>
        <img src={user.picture} alt="Profile" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <code>{JSON.stringify(user, null, 2)}</code> */}
        <p className="tj">Vehicles:</p>
        <h3>
          {vehicle.make}{vehicle.model}{vehicle.trim}
        </h3>
      </Fragment>
    </div>
  )
}

export default Profile;
