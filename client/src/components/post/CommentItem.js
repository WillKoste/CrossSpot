import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const CommentItem = ({
  postId,
  comment: {_id, text, name, avatar, user, date},
  auth
}) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img
            class="round-img"
            src={avatar}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">
          {text}
        </p>
          <p class="post-date">
            Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
        </p>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  auth: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(CommentItem);