import React from 'react';

const HomeCardList = props => (
  <ul>
    <li>
      <img
        alt="img"
        draggable="false"
        src={process.env.PUBLIC_URL + '/images/mood1.svg'}
      />
    </li>
  </ul>
);

export default HomeCardList;