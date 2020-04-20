import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileExperience = ({experience: {
  company, title, current, from, to, description
}}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p><Moment format="MM/DD/YYYY">{from}</Moment> - {current ? ' Current' : <Moment format="MM/DD/YYYY">{to}</Moment>} </p>
      <p><strong>Position: </strong>{title}</p>
      <p><strong>Description: </strong>{description}</p>
    </div>
  )
}

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
}

export default ProfileExperience;