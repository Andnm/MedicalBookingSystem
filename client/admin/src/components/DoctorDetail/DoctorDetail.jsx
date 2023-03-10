import dayjs from 'dayjs'
import React, { memo, useState } from 'react'
import src from "../../assets/images/avatar.jpg"
import { AiOutlinePlus } from "react-icons/ai"
import "./doctordetail.css";
import ROUTER from '../../api/Router';

function DoctorDetail({ specialistId, profile, formData, doctorDetail, fullname, dateOfBirth, phone, gender, specialist, email, degree, address }) {
    const [Avatar, setAvatar] = useState();
    const formatDate = (date) => {
        const formatDate = date.split("/").reverse().join("-");
        console.log(formatDate);
        return formatDate;
    }

    const onSelectAvatar = (file) => {
        if (!file) return;
        console.log(file);
        setAvatar(URL.createObjectURL(file));
        formData.current.append('avatar', file);
    }

    if (doctorDetail)
        return (
            <div className='w-100 h-auto px-3 d-flex'>
                <div className='w-50 h-100'>
                    {/* avatar */}
                    <div className='w-100 h-50 d-flex justify-content-center px-5'>
                        <img src={`${ROUTER}/image/${doctorDetail.avatar.filename}`} alt="" className='h-100' />
                    </div>
                </div>

                < div className='w-50 h-100' >
                    < div className='w-100 h-100 d-flex flex-column gap-2' >
                        {/* <div className='w-50 h-auto'> */}
                        <div div className="input-group" >
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Fullname</span>
                            </div>
                            <input type="text" className="form-control" defaultValue={doctorDetail.fullname} placeholder="Fullname" aria-label="Fullname" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Address</span>
                            </div>
                            <input type="text" className="form-control" defaultValue={doctorDetail.address} placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" />
                        </div>

                        <div className="d-flex gap-3">
                            <div className="input-group w-50">
                                <div className="input-group-prepend w-100">
                                    <span className="w-25" id="basic-addon1">Email</span>
                                </div>
                                <input type="text" className="form-control" defaultValue={doctorDetail.email} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group w-50">
                                <div className="input-group-prepend w-100">
                                    <span className="w-25" id="basic-addon1">Degree</span>
                                </div>
                                <input type="text" className="form-control" defaultValue={doctorDetail.degree} placeholder="Degree" aria-label="Degree" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        <div className='d-flex gap-3'>
                            <div className="input-group w-50">
                                <div className="input-group-prepend w-100">
                                    <span className="w-25" id="basic-addon1">Sex</span>
                                </div>
                                <select className="form-select" defaultValue={doctorDetail.gender} aria-label="Default select example">
                                    <option value="male">Male</option>
                                    <option value="female" selected='selected' >Female</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>
                            <div className="input-group w-50">
                                <div className="input-group-prepend w-100">
                                    <span className="w-25" id="basic-addon1">Date of birth</span>
                                </div>
                                <input defaultValue={formatDate(doctorDetail.dateOfBirth)} type="date" className="form-control" placeholder="DateofBirth" aria-label="DateofBirth" />

                            </div>
                        </div>

                        <div className='d-flex gap-3'>
                            <div className="input-group w-50">
                                <div className="input-group-prepend w-100">
                                    <span className="w-25" id="basic-addon1">Phone</span>
                                </div>
                                <input type="text" defaultValue={doctorDetail.phone} className="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group w-50">
                                <div className="input-group-prepend w-100">
                                    <span className="w-25" id="basic-addon1">Specialist</span>
                                </div>
                                <select className="form-select" defaultValue={doctorDetail.special._id} aria-label="Default select example">
                                    {
                                        specialist.map(special => <option value={special._id}>{special.title}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" defaultValue={doctorDetail.profile} rows="8"></textarea>
                        </div>
                    </div>

                </div >
            </div >
        )

    return (
        <div className='w-100 h-auto px-3 d-flex'>
            <div className='w-50 h-100'>
                {/* avatar */}
                <div className='w-100 h-50 d-flex justify-content-center px-5'>
                    {
                        Avatar ?
                            <img src={Avatar} alt="" className='h-100' />
                            :
                            <div className='d-flex justify-content-center align-items-center'>
                                <label htmlFor="avatar">
                                    <div className='select-file-label'>
                                        <AiOutlinePlus />
                                    </div>
                                    <p className='text-center mt-2'>Avatar</p>
                                </label>
                                <input className='d-none' onChange={e => onSelectAvatar(e.target.files[0])} type="file" id='avatar' />
                            </div>
                    }
                </div>
            </div>

            < div className='w-50 h-100' >
                < div className='w-100 h-100 d-flex flex-column gap-2' >
                    {/* <div className='w-50 h-auto'> */}
                    <div div className="input-group" >
                        <div className="input-group-prepend w-100">
                            <span className="w-25" id="basic-addon1">Fullname</span>
                        </div>
                        <input type="text" ref={fullname} className="form-control" placeholder="Fullname" aria-label="Fullname" aria-describedby="basic-addon1" />
                    </div >

                    <div className="input-group">
                        <div className="input-group-prepend w-100">
                            <span className="w-25" id="basic-addon1">Address</span>
                        </div>
                        <input type="text" ref={address} className="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1" />
                    </div>

                    <div className="d-flex gap-3">
                        <div className="input-group w-50">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Email</span>
                            </div>
                            <input type="text" ref={email} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group w-50">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Degree</span>
                            </div>
                            <input type="text" ref={degree} className="form-control" placeholder="Degree" aria-label="Degree" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className='d-flex gap-3'>
                        <div className="input-group w-50">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Sex</span>
                            </div>
                            <select ref={gender} className="form-select" aria-label="Default select example">
                                <option value="male">Male</option>
                                <option value="female" selected='selected' >Female</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>
                        <div className="input-group w-50">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Date of birth</span>
                            </div>
                            <input type="date" ref={dateOfBirth} className="form-control" placeholder="DateofBirth" aria-label="DateofBirth" />

                        </div>
                    </div>

                    <div className='d-flex gap-3'>
                        <div className="input-group w-50">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Phone</span>
                            </div>
                            <input type="text" ref={phone} className="form-control" placeholder="Phone" aria-label="Phone" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group w-50">
                            <div className="input-group-prepend w-100">
                                <span className="w-25" id="basic-addon1">Specialist</span>
                            </div>
                            <select ref={specialistId} className="form-select" aria-label="Default select example">
                                {
                                    specialist.map(special => <option value={special._id}>{special.title}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea ref={profile} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>

                </div >

            </div >
        </div >
    )
}

export default DoctorDetail