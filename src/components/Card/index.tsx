import React, { useId } from "react";
import { getTopFiveApps } from "../../utils/functions";
import { CardBase, Title, Row, Score, AppName } from "./styles";
import { App, Host } from "../../domain/type";
import Modal from "../Modal";
import { useState } from "react";

interface CardProps {
  host: Host;
}

const Card = ({ host: { hostName, appList } }: CardProps) => {
  const list = getTopFiveApps(appList);
  const idForApp = useId();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  const handleClick = (releaseVersion: number) => () => {
    const content = `Release version: ${releaseVersion}`;
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <CardBase>
      <Title>{hostName}</Title>
      {list.map(({ score, appName, releaseVersion }: App, index) => (
        <Row
          key={`${idForApp}-${appName}`}
          onClick={handleClick(releaseVersion)}
          data-testid={`${index}-${appName}`}
        >
          <Score>{score}</Score>
          <AppName>{appName}</AppName>
        </Row>
      ))}
      {isOpen && <Modal setIsOpen={setIsOpen} content={modalContent} />}
    </CardBase>
  );
};

export default Card;
