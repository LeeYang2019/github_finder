import React from 'react';
import Button from '../../utils/Button';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="github user"
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <Button text="More" bck="#3f51b5" color="#ffffff" link={html_url} />
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
