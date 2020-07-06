import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        
          <div className="box">
            <h1>Login</h1>
            <form action="http://localhost:3001/user/login" method="POST">
            <input
              type="text"
              name="username"
              className="email"
            />
            <input
              type="password"
              name="password"
              className="email"

            />

            <button className="btn" type="submit">Sign In</button>
            <div id="btn2" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Sign Up
        </div>
        </form>
            </div>
          
            {/* <div id="btn2">Sign Up</div> */}
          
            <div>
              
       
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Đăng ký tài khoản</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form action="http://localhost:3001/user/register" method="POST">
              <div className="modal-body">
              <div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Tên tài khoản</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" name="username" placeholder="Tên tài khoản" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Họ tên</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" name="name"  placeholder="Họ tên" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Mật khẩu</label>
                  <input type="password" className="form-control" id="exampleInputEmail1" name="password" placeholder="Mật khẩu" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nhập lại mật khẩu</label>
                  <input type="password" className="form-control" id="exampleInputEmail1" name="repassword"  placeholder="Nhập lại mật khẩu" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Nhập Email" />
                </div>
               
                
                
              </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary ">Đăng kí </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            
          
        
        
      </div>
    );
  }
}
