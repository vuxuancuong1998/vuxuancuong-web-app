import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Content from "./Content";
import Footer from "./Footer";
import Login from "./Login";
import LoveMusic from "./LoveMusic";
import TrashMusic from "./TrashMusic";
const axios = require('axios');



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listMusic: [],
    };
  }
  componentDidMount(){
    this.getMusic();
  }
  async getMusic(){
    let res = await axios.get("http://localhost:3001/music");
    // console.log(res.data)
    this.setState({
      listMusic: [...res.data],
    });
  }
  handleAddMusic = async (name,author,type,url, isLove = false, isTrash = false)=>{
    // console.log(name+":"+author+":"+type);
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var newDate =day + ' - ' + month + ' - ' + year;
    await axios.post("http://localhost:3001/music/add",{name:name, author:author, type:type, url:url, isLove:isLove, isTrash:isTrash,newDate});
    this.getMusic();
  }

  handleIsLove = async (_id,isLove) => {
    // let song = this.state.listMusic;
    // console.log(song)
    // song = song.map((items) => {
    //   if (items.item === item) items.isLove = !items.isLove;
    //   return items;
      
    // }); 
    // console.log(as);
    // this.setState({
      //   listMusic: [...song],
      // });
      await axios.post("http://localhost:3001/music/handleLove",{_id:_id,isLove:isLove});
      this.getMusic();
  };
  handleIsTrash = async (_id) => {
    // let song = this.state.listMusic;
    // song = song.map((item) => {
    //   if (item.id === id) item.isTrash = !item.isTrash;
    //   return item;
    // });
    // this.setState({
    //   listMusic: [...song],
    // });
    await axios.post("http://localhost:3001/music/handleTrash",{_id:_id,isTrash:true});
    this.getMusic();


  };



  handleTrashItem =async (item) => {
  //   let song = this.state.listMusic;
  //   let index = song.indexOf(item)
  //  song.splice(index, 1);
  //   // console.log("song",song)
  //   // console.log("deletesong",deletesong)
  //   this.setState({listMusic: [...song]});
  //   console.log(item);
    await axios.post("http://localhost:3001/music/TrashItem",{item:item});
    this.getMusic();

  }

  render() {
    const ListMusic = this.state.listMusic
    // console.log(ListMusic)
    let HomeMusic = ListMusic.filter(item=>!item.isTrash);
    let TrashMusicList = ListMusic.filter(item=>item.isTrash);
    let LoveMusicList = ListMusic.filter(item=>item.isLove);
    
    const styleMenu = {
      color: "white",
    };
    
   
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link to="/Home" style={styleMenu} className="nav-link">
              MUSIC
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive" 
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/Home" style={styleMenu} className="nav-link">
                    Trang chủ
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/love" style={styleMenu} className="nav-link">
                    Bài hát yêu thích
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/trash" style={styleMenu} className="nav-link">
                    Bài hát đã xoá
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" style={styleMenu} className="nav-link">
                    Đăng nhập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Content
              handleTrashItem={this.handleTrashItem}
              listMusic={HomeMusic}
              handleIsLove={this.handleIsLove}
              handleIsTrash={this.handleIsTrash}
              handleAddMusic={this.handleAddMusic}
            />
            <Footer />
          </Route>

          <Route path="/Home">
            <Content
              handleTrashItem={this.handleTrashItem}
              listMusic={HomeMusic}
              handleIsLove={this.handleIsLove}
              handleIsTrash={this.handleIsTrash}
              handleAddMusic={this.handleAddMusic}
            />
            <Footer />
          </Route>
          <Route path="/trash">
            <TrashMusic listMusic={TrashMusicList} handleTrashItem={this.handleTrashItem} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/love">
            <LoveMusic
              listMusic={LoveMusicList}
              handleIsLove={this.handleIsLove}
              isLoved
              handleIsTrash={this.handleIsTrash}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}
