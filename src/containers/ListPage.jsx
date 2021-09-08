import React, { Component } from 'react';
import style from './List.css';
import VillagerList from '../components/displays/VillagerList';
export default class ListPage extends Component {
  render() {
    return (
      <div className={style.list}>
        <h3>Villagers from the village</h3>
        <VillagerList />
	   </div>
    );
  }
}
