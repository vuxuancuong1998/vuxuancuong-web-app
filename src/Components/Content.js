import React, { Component } from "react";
import Banner from "./Banner";

import MusicCard from "./MusicCard";
export default class Content extends Component {
  // setLoveMusic = (SongId) => {
  //   const Song = this.state.ListMusic.find(Song => Song.id === SongId);
  //   const listSong = this.ListMusic.filter(Song => Song.id !== SongId);
  //   const newSong = {
  //     id:Song.id,
  //     name:Song.name,
  //     image:Song.image,
  //     mp3:Song.mp3,
  //     lovemusic: !Song.lovemusic
  //   }
  //   this.setState({ListMusic: [...listSong, newSong]})
  // }
  render() {
    const { listMusic } = this.props;
    return (
      <>
        <Banner handleAddMusic={this.props.handleAddMusic}/>
        <div className="container">
          <div className="row">
            {listMusic.map((item, index) => (
             <MusicCard item={item} index = {index} key={index} handleTrashItem={this.props.handleTrashItem} handleIsLove = {this.props.handleIsLove} handleIsTrash={this.props.handleIsTrash}/>
            ))}
          </div>
        </div>
      </>
    );
  }
}

