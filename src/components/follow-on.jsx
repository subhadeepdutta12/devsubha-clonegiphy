import {FaInstagram, FaXTwitter, FaLinkedin} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/subhadeepdutta2001/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/dev.subhadeep/">
          <FaInstagram size={20} />
        </a>
        <a href="https://x.com/S30459767">
          <FaXTwitter size={20} />
        </a>
        
      </div>
      <br/>
      <span>Developed By Subhadeep Dutta</span>
    </div>
  );
};

export default FollowOn;
