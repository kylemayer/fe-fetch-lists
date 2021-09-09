import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, species, birthday, skill, phrase }) => (
  <>
    <h3>{name}</h3>
    <img alt={name} src={image} />
    <p>{species}</p>
    <p>{birthday}</p>
    <p>{skill}</p>
    <p>{phrase}</p>
  </>
);

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default Villager;
