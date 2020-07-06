import React, { Component } from "react";
import styled from "styled-components";
import { FaHeartbeat, FaTrash } from "react-icons/fa";
import InfoCard from "./InfoCard";
import ReactPlayer from 'react-player/youtube';
export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
    };
  }
  componentDidMount() {
    this.setState({
      item: [{ ...this.props.item }],
    });
  }
  unLove = () => {
      this.props.handleIsLove(this.props.item._id,false);
  };
  setIsLoved = () => {
    this.props.handleIsLove(this.props.item._id,true);
  };
  checkIsLove = () => {
    if (this.props.item.isLove) {
      this.unLove();
    } else {
      this.setIsLoved();
      alert(
        "Bài hát đã được chuyển vào danh sách bài hát yêu thích (^_^)"
      );
    }
  };
  setIsTrash = () => {
    this.props.handleIsTrash(this.props.item._id);
    alert(
      "Đã xoá bài hát !! Bài hát đã được chuyển vào danh sách bài hát đã xoá"
    );
  };
  // checkIsTrash = ()=>{
  //   if(this.props.trashItem){
  //     this.props.handleTrashItem(this.props.item.id);
  //   }else{
  //   this.setIsTrash();
  //   }
  // }
  remove = ()=>{
    this.props.handleTrashItem(this.props.item);
  }
  render() {
    const { item } = this.state;

    // console.log(this.state.item);
    return (
      <>
        {item !== null && (
          <>
            <div className="col-md-4 mb-5 ">
              <div className="card h-100">
                <div className="card-body">
                  <div className="card-title">
                  <div className="player-wrapper">
                    <ReactPlayer
                      url={this.props.item.url}
                      className='react-player'
                    
                      width='100%'
                      height='100%'
                    />
                  </div>
                    </div>
                  <p className="card-text">{this.props.item.name}</p>
                </div>
                <div className="card-footer">
                  {/* <InfoCard item={this.props.item} />
                  <Heart>
                    <FaHeartbeat
                      onClick={this.checkIsLove}
                      onDoubleClick={() => {
                        alert("Thao tác quá nhanh, vui lòng sống chậm lại");
                      }}
                    />
                  </Heart> */}
                  { 
                    this.props.item.isTrash ?  
                    <Btn onClick={this.remove} >
                    <FaTrash />
                  </Btn>
                    :
                    <>
                     <InfoCard item={this.props.item} />
                  <Heart>
                    <FaHeartbeat
                      onClick={this.checkIsLove}
                      onDoubleClick={() => {
                        alert("Thao tác quá nhanh, vui lòng sống chậm lại");
                      }}
                    />
                  </Heart> 
                    <Btn onClick={this.setIsTrash} >
                      <FaTrash  />
                    </Btn> 
                    </>
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
const Heart = styled.span`
  font-size: 25px;
  margin-left: 27px;
  transition: 0.5s;
  background-color: white;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: red;
  }
`;
const Btn = styled.button`
  color: ${(props) => (props.primary ? "blue" : "red")};
  padding-left: 10px;
  margin-left: 25px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
