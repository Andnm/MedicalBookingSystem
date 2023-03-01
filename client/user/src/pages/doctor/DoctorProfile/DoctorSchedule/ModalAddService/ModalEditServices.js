import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import _ from "lodash";
import { formatPrice } from "~/utils";

import { hanlderRequest } from "~/utils";
import API_URL from "~/api/Router";
import { v4 as uuidv4 } from "uuid";
import { memo } from "react"


function ModalEditServices(props) {

  const { modalShow, setModalShow, bookedUser } = props;
  const [listServices, setListServices] = useState([]);
  const [userServices, setUserServices] = useState([]);

  useEffect(() => {
    const cloneUserBooked = _.cloneDeep(bookedUser);
    if(!_.isEmpty(cloneUserBooked)) {
      setUserServices(cloneUserBooked.services);
    }
  }, [bookedUser]) // trigger useEffect when bookedUser is available

  console.log('user: ', userServices);

  // const [services, setServices] = useState([
  //   {
  //     unique_id: uuidv4(),
  //     service_id: bookedUser.services.,
  //     service_Name: serviceName,
  //     quantity: +serviceQty,
  //   },
  // ]);

  const hanldeOnChangeValue = (event, id) => {
    const cloneUserBooked = _.cloneDeep(bookedUser);
    if(!_.isEmpty(cloneUserBooked)) {
      const service = cloneUserBooked.services.find((item) => item.service_id === id);
      service.quantity = event.target.value;
      setUserServices(cloneUserBooked.services);
    }
  }

  useEffect(() => {
    fetchAllServices();
  }, []);

  // need add extra service 
  const fetchAllServices = async () => {
    const [error, res] = await hanlderRequest(axios.get(API_URL + "/services"));
    if (res && res.data) {
      setListServices(res.data);
    } else {
      console.log(error.message);
    }
  };

  const handleUpdateServices = async (bookedUser) => {
    Promise.all(
      bookedUser?.services?.map(async (service) => {
        const [error, res] = await hanlderRequest(
          axios.put(
            API_URL + `/bookedservices/${bookedUser._id}/${service.service_id}`
          )
        );
        if (res && res.data) {
          console.log(res.data);
          setModalShow(false);
        } else {
          toast.error(error.message);
        }
      })
    );
  };

  const hanldeCloseModal = () => {
    setModalShow(false)
    // setUserServices([])
  }

  // console.log('>> check clone booked: ', userBookedServices, '>> check ! clone: ', bookedUser, '>> compare: ', userBookedServices === bookedUser);
  console.log('>> check not clone: ', bookedUser);
  // console.log('>> check clone booked: ', userBookedServices);
  return (
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thêm Dịch Vụ Phát Sinh
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Tên
            </label>
            {bookedUser?.customer?.map((item, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  value={item.fullname}
                  onChange={() => {}}
                  disabled
                  style={{ cursor: "no-drop" }}
                />
              );
            })}
            {
              // <input
              //     type="email"
              //     className="form-control"
              //     id="inputEmail4"
              //     value={bookedUser?.customer[0]?.fullname}
              //     onChange={() => {}}
              //     disabled
              //     // style={{cursor: 'no-drop'}}
              // />
            }
          </div>
          <div className="col-md-6">
            <label className="form-label">Giờ Khám</label>
            <input
              type="text"
              className="form-control"
              style={{ cursor: "no-drop" }}
              defaultValue={bookedUser.slot_time}
              disabled
            />
          </div>
          {
            userServices.map((service, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      {`Dịch Vụ - ${index + 1}`}
                    </label>
                    <select
                      id="inputState"
                      className="form-select"
                      value={service.service_id}
                    >
                      {listServices &&
                        listServices.length > 0 &&
                        listServices.map((item, index) => {
                          return (
                            <option
                              key={index}
                              value={item._id}
                            >{`${item.name} - ${service.service_id}`}</option>
                          );
                        })}
                    </select>
                  </div>
                  {/* <div className="col-md-4">
                    <label htmlFor="inputQnt" className="form-label">
                      Giá
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputQnt"
                      value={formatPrice(service.price)}
                      disabled
                      onChange={() => {}}
                      style={{cursor: 'no-drop'}}
                    />
                  </div> */}
                  <div className="col-md-2">
                    <label htmlFor="inputQnt" className="form-label">
                      sửa số lượng
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputQnt"
                      value={service.quantity}
                      onChange={(event) => hanldeOnChangeValue(event, service.service_id)}
                    />
                  </div>
                </React.Fragment>
              );
            })
          }
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleUpdateServices(bookedUser)}>
          Cập Nhật
        </Button>
        <Button className="btn btn-danger" onClick={hanldeCloseModal}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default memo(ModalEditServices);
