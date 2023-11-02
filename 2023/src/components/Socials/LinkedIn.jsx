import { Button } from "react-bootstrap";

const LinkedIn = () => {
  return (
    <div className="linkedin-main">
      <div className="linkedin-sub">
        <div className="linkedin-picture-container">
          <img
            className="linkedin-picture"
            src="/myportfolio/img/linkedinppcrop.jpeg"
            alt="Profile"
            width="150px"
          />
        </div>
      </div>
      <div className="linkedin-sub">
        <div className="linkedin-content">
          <h3>Jack White</h3>
          <p>Senior Front End Developer at Apply Digital</p>
          <Button
            variant="outline-primary"
            href="https://www.linkedin.com/in/the-jack-white/"
            target="_blank"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
