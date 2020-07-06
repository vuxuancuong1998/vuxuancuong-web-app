import React, { Component } from "react";
import MusicCard from "./MusicCard";

export default class TrashMusic extends Component {
  render() {
    const { listMusic } = this.props;
    // const ListTrash = listMusic.filter((item) => item.isTrash);
    return (
      <div className="container">
        <div className="row">
          {listMusic.map((item, index) => {
            return (
              <MusicCard
                key={index}
                index = {index}
                item={item}
                handleIsTrash={this.props.handleIsTrash}
                trash={this.props.trash}
                handleTrashItem={this.props.handleTrashItem}
                trashItem={this.props.trashItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
