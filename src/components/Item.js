import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  
  editItem = (e) => {
    let newLocation = prompt('New item location:')
    this.props.store.editItem(e.target.value, newLocation)
  }

  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)

  }

  render() {
    let item = this.props.item
      return (
        <div className = {item.completed ? "crossed": null}>
          <input type="checkbox" value={item.name} onClick={this.checkItem}/> {item.name} - {item.location}
          <button className="editButton" value={item.name} onClick={this.editItem}>EDIT</button>
          <button className="editButton" value={item.name} onClick={this.deleteItem}>DELETE</button>
        </div>)
    }
}

export default Item