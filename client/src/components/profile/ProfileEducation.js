import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileEducation = ({education: {
  school, degree, current, from, to, fieldofstudy, description
}}) => {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p><Moment format="MM/DD/YYYY">{from}</Moment> - {current ? ' Current' : <Moment format="MM/DD/YYYY">{to}</Moment>} </p>
      <p><strong>Degree: </strong>{degree}</p>
      {fieldofstudy && <p><strong>Field of Study: </strong>{fieldofstudy}</p>}
      {description && <p><strong>Description: </strong>{description}</p>}
    </div>
  )
}

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
}

export default ProfileEducation;