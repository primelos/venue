import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img className="iconImage" src={TicketIcon} alt="icon_button" />
      {props.text}
    </Button>
  );
};

export default MyButton;
