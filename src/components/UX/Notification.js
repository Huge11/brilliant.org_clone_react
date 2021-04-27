import React from "react";
import { MDBNotification } from "mdbreact";

function Notification({title, message}){
  return (
    <MDBNotification
      show
      fade
      iconClassName="text-primary"
      title={title}
      message={message}
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: 9999
      }}
    />
  );
}

export default Notification;