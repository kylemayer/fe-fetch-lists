import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    {villagers.map(villager => (
      <li key={villager.id}>
        <Villager
          name={villager.name}
          image={villager.image}
          species={villager.species}
          birthday={villager.birthday}
          skill={villager.skill}
          phrase={villager.phrase}
        />
      </li>
    ))}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      skill: PropTypes.string.isRequired,
      phrase: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default VillagerList;
