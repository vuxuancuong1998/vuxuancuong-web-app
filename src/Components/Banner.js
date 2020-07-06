import React, { Component } from "react";

export default class Banner extends Component {
  constructor(){
    super();
    this.name = React.createRef();
    this.author = React.createRef();
    this.type = React.createRef();
    this.url = React.createRef();
  }
  onClickAdd = ()=>{
    let name = this.name.current.value;
    let author = this.author.current.value;
    let type = this.type.current.value;
    let url = this.url.current.value;
    this.props.handleAddMusic(name,author,type, url);
  }
  render() {
    return (
      <div className="container">
        {/* Heading Row */}
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("../img/logo.jpg")}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Thêm bài hát</h1>
          
              <div className="form-group">
                <input ref={this.name} type="text" className="form-control" placeholder="Tên bài hát" />
                
              </div>
              <div className="form-group">
                <input ref={this.author} type="text" className="form-control"  placeholder="Tác giả" />
              </div>
              <div className="form-group">
                <input ref={this.type} type="text" className="form-control"  placeholder="Thể loại" />
              </div>
              {/* <div className="form-group">
                <div className = "form-row">
                  <div className="col-4">
                    <span>Ngày xuất bản</span>
                  </div>
                  <div className="col">
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div> */}
              <div className="form-group">
                <input ref={this.url} type="text" className="form-control"  placeholder="Nhập đường dẫn" />
              </div>
             
              <button className="btn btn-primary" onClick={this.onClickAdd}>Thêm</button>
            

          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
