import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo: { html_url, name, language, description } }) => {
  return (
    <div className="card">
      <h3>
        <a href={html_url} target=" ">
          {name}
        </a>
      </h3>
      {language && (
        <p>
          <strong>Language: </strong> {language}
        </p>
      )}
      {description && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
