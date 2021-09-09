/* eslint-disable max-len */
import React, { Component } from 'react';
import VillagerDetail from '../components/displays/VillagerDetail';
import { reqVillagerById } from '../services/reqVillagers';

export default class DetailPage extends Component {
  state = {
    loading: true,
    villager: {},
  };

  componentDidMount = async () => {
    const villager = await reqVillagerById(this.props.match.params.villager);
    this.setState({ loading: false, villager });
  };

  render() {
    const { name, image, species, birthday, skill, phrase } = this.state.villager;

    return (
      <div>
        {this.state.loading
          ? (<p>Loading...</p>)
          : (<VillagerDetail
            name={name}
            image={image}
            species={species}
            birthday={birthday}
            skill={skill}
            phrase={phrase}
          />
          )}
      </div>
    );
  }
}
