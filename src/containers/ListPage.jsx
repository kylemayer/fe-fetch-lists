import React, { Component } from 'react';
import style from './List.css';
import VillagerList from '../components/displays/VillagerList';
import { reqVillagers } from '../services/reqVillagers';
export default class ListPage extends Component {
  state = {
    loading: true,
    villagers: [],
  };

  componentDidMount = async () => {
    const response = await reqVillagers();
    this.setState({ villagers: response, loading: false });
  };

  render() {
    return (
      <div className={style.list}>
        <h3>Villagers from the village:</h3>
        {this.state.loading
          ? <p>Loading!</p>
          : <VillagerList villagers={this.state.villagers} />
        }
      </div>
    );
  }
}
