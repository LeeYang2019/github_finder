import React from 'react';
import Buttom from '@material-ui/core/Button';

const Button = (props) => {
  return (
    <Buttom
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color,
      }}
    >
      {/* <img src={TicketIcon} className="iconImage" alt="icon_button" /> */}
      {props.text}
    </Buttom>
  );
};

export default Button;
