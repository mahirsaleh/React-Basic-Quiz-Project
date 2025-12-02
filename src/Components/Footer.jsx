import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import FooterDiv from "../StyledComponents/Footer.Styled";

export default function Footer() {
  return (
    <FooterDiv>
      <div className="FooterDiv__curved-div">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-1.69,0.52 C196.38,181.47 357.22,-70.88 498.87,148.21 L501.69,150.17 L0.00,149.67 Z"></path>
        </svg>
      </div>

      <div className="FooterDiv__info-div">
        <p className="info-div__heading">Contact Us</p>
        <div className="info-div__links">
          <a
            href="http://github.com/mahirsaleh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="http://Wa.me/+8801633657905"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:mahirsaleh001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.facebook.com/mmmmmmaaaaaahhhhhhiiiiiirrrrrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </div>

        <p className="info-div__copy-right">
          All Right Reserve {new Date().getFullYear()}
        </p>
      </div>
    </FooterDiv>
  );
}
