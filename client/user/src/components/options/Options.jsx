import { faFacebook, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./options.scss";

export default function Options() {
  return (
    <div className="topbarOptions">
      <div className="optionItem-wrapper">
        <div className="optionItem">
          <span>Chuyên khoa trọng điểm</span>
          <FontAwesomeIcon icon={faChevronDown} className="optionIcon" />
          <div className="dropdown">
            <Link to="/specialist/id" className="dropItem">
              Tim mạch
            </Link>
            <span className="dropItem">Thần kinh</span>
          </div>
        </div>
        <div className="optionItem">
          <Link to="/doctors">Danh sách bác sĩ</Link>
        </div>
        <div className="optionItem">
          <Link to="/blogs">
            <span>Bài viết - Tin Tức</span>
          </Link>
        </div>
        <div className="optionItem">
          <span>Khác</span>
          <FontAwesomeIcon icon={faChevronDown} className="optionIcon" />
        </div>
        <div className="optionItem">
          <span>
            <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
          </span>
          <span>
            <FontAwesomeIcon className="social-icon youtube" icon={faYoutube} />
          </span>
        </div>
      </div>
    </div>
  );
}
