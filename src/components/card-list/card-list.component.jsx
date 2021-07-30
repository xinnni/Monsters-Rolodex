import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monsters) => (
        <Card key={monsters.id} monsters={monsters} />
      ))}
    </div>
  );
};
