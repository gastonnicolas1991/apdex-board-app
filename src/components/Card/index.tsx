import React, { useState } from "react";
import { getTopFiveApps } from "../../utils/functions";
import Tooltip from "../Tooltip";
import { CardBase, Title, Row, Score, AppName } from "./styles";

type AppList = {
  score: number;
  appName: string;
  releaseVersion: number;
};

interface CardProps {
  hostName: string;
  appList: AppList[];
}

const Card = ({ hostName, appList }: CardProps) => {
  const list = getTopFiveApps(appList);

  return (
    <CardBase>
      <Title>{hostName}</Title>
      {list.map(({ score, appName }: AppList) => (
        <Row key={`${score}-${appName}`}>
          <Score>{score}</Score>
          <AppName>{appName}</AppName>
        </Row>
      ))}
    </CardBase>
  );
};

export default Card;
