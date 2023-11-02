import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./index.css";

const Second = () => {
  const renderTooltip = (name) => (
    <Tooltip className="button-tooltip">
      <p>{name}</p>
    </Tooltip>
  );

  return (
    <div className="second-nav">
      <div className="second-nav-item">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("LinkedIn")}
        >
          <a
            href="https://www.linkedin.com/in/the-jack-white"
            rel="noreferrer"
            target="_blank"
          >
            <Image src="/images/linkedin.png" width="35px" thumbnail />
          </a>
        </OverlayTrigger>
      </div>
      <div className="second-nav-item">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Github")}
        >
          <a
            href="https://github.com/the-jack-white"
            rel="noreferrer"
            target="_blank"
          >
            <Image src="/images/github-logo.svg" width="35px" thumbnail />
          </a>
        </OverlayTrigger>
      </div>
      <div className="second-nav-item">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip("Download CV")}
        >
          <a
            href="/documents/JackWhiteCV_Nov2023.pdf"
            rel="noreferrer"
            target="_blank"
            download
          >
            <Image src="/images/download.png" width="35px" thumbnail />
          </a>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default Second;
