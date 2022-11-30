import React from "react";
import { getTopFiveApps } from "../../utils/functions";
import { CardBase, Title, Row, Score, AppName } from "./styles";
import { App, Host } from "../../domain/type";

interface CardProps {
  host: Host;
}

const Card = ({ host: { hostName, appList } }: CardProps) => {
  const list = getTopFiveApps(appList);

  return (
    <CardBase>
      <Title>{hostName}</Title>
      {list.map(({ score, appName }: App) => (
        <Row key={`${score}-${appName}`}>
          <Score>{score}</Score>
          <AppName>{appName}</AppName>
        </Row>
      ))}
    </CardBase>
  );
};

export default Card;
