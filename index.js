const Notification = (props) => {
  const { imgUrl, text, className } = props;
  const bgContainer = `container ${className}`;
  return (
    <div className={bgContainer}>
      <img className="image" src={imgUrl} />
      <p className="para"> {text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1> Notifications</h1>
    <div>
      <Notification
        className="bg1"
        text="Information Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="bg2"
        text="Success Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="bg3"
        text="Warning Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="bg4"
        text="Error Message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
