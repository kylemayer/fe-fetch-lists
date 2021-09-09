import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    List of the villagers.
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      species: PropTypes.string,
      birthday: PropTypes.string,
      skill: PropTypes.string,
      phrase: PropTypes.string,
    })
  )
};

export default VillagerList;
