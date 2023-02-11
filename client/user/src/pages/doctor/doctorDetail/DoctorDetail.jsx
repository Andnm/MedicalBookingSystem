import { useEffect, useState } from "react";
import "./doctorDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faHospitalSymbol,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_URL from "~/api/Router";

export default function DoctorDetail() {
  const [moreOpen, setMoreOpen] = useState(false);
  const { id: doctorId } = useParams();
  const [doctor, setDoctor] = useState();

  // Side effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL+"/users/doctors/" + doctorId);
        setDoctor(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [doctorId]);

  return (
    <div className="doctorDetail">
      <div className="doctorVisual">
        <img src={`${API_URL}/image/doctor?.avatar.filename`} alt="" />
        <h1>{`${doctor?.degree} ${doctor?.fullname}`} </h1>
      </div>
      <div className="doctorProfileContent">
        <div className="profileLeft">
          <div className="profileItem">
            <div className="header">
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Học vấn</span>
            </div>
            <div className="devideLine" />
            <p>{doctor?.degree}</p>
          </div>
          <div className="profileItem">
            <div className="header">
              <FontAwesomeIcon icon={faHospitalSymbol} />
              <span>Nơi công tác</span>
            </div>
            <div className="devideLine" />
            <p>Bệnh viện Human Heal HCM</p>
          </div>
          <div className="profileItem">
            <div className="header">
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Chuyên ngành</span>
            </div>
            <div className="devideLine" />
            <p>{doctor?.specialist}</p>
          </div>
        </div>
        <div className="profileRight">
          <div className="profileItem">
            <div className="header">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>Giới thiệu</span>
            </div>
            <div className="devideLine" />
            <p>{doctor?.profile}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
