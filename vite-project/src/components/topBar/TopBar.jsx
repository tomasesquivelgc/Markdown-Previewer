import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faFire } from '@fortawesome/free-solid-svg-icons';

const TopBar = ({ divName }) => {
  return (
    <div className="toolbar">
      <i className='fa fa-free-code-camp'><FontAwesomeIcon icon={faFire} title="no-stack-dub-sack" /></i>
      {divName}
      <i className='fa fa-arrows-alt'><FontAwesomeIcon icon={faArrowsAlt} /></i>
    </div>
  );
};

export default TopBar;
