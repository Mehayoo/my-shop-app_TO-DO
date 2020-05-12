import React from "react";
import { Link, Icon } from "../../index";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./MiniBasket.scss";

const MiniBasket = () => {
  return (
    <OverlayTrigger
      className="ms-minibasket"
      trigger="click"
      placement={"bottom"}
      overlay={
        <Popover id={`popover-positioned-${"bottom"}`}>
          <Popover.Title as="h3">{`Popover ${"bottom"}`}</Popover.Title>
          <Popover.Content>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Content>
        </Popover>
      }
    >
      <Link href={"#!"} className="nav__link">
        <Icon iconName={"shopping_cart"} iconPos={"left"}>
          {"Cart"}
        </Icon>
      </Link>
    </OverlayTrigger>
  );
};

export default MiniBasket;
