import React, { Component } from 'react';
import {FaInfo} from 'react-icons/fa';


export default class InfoCard extends Component {
 
    render() {

        const ColorBtn = {
            color:"blue",
        }
        const {item} = this.props;
        return (
            <>
            <FaInfo style={ColorBtn} data-toggle="modal" data-target={"#exampleModal" + item._id}>
                    <button />
                  </FaInfo>
                  <div
                    className="modal fade"
                    id={"exampleModal" + item._id}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h5 className="modal-title " id="exampleModalLabel">
                            Thông tin bài hát
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <table className="table table-bordered">
                            <thead>
                              
                              <tr>
                                <th scope="col">Tên bài hát</th>
                                <th scope="col">{item.name}</th>
                              </tr>
                              <tr>
                                <th scope="col">Tác giả</th>
                                <th scope="col">{item.author}</th>
                              </tr>
                              <tr>
                                <th scope="col">Ngày cập nhật</th>
                                <th scope="col">{item.day}</th>
                              </tr>
                              <tr>
                                <th scope="col">Thể loại</th>
                                <th scope="col">{item.type}</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
            </>
        );
    }
}
