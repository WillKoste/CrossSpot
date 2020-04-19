import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Experience = ({experience}) => {
  const experiences = experience.map(exp => (
    <tr key={experience._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="MM/DD/YYYY">{exp.from}</Moment> - {exp.to === null ? ' Current' : <Moment format="MM/DD?YYYY">{exp.to}</Moment>}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired
}

export default connect()(Experience);