import { HostListBase, Header, Container } from "./styles";
import { Host, Mode } from "../../domain/type";
import Card from "../Card";
import { useState } from "react";

interface HostListProps {
  hosts: Host[];
}

const HostList = ({ hosts }: HostListProps) => {
  const [layoutMode, setLayoutMode] = useState<Mode>("grid");
  const isGrid: boolean = layoutMode === "grid";

  const handleClick = () =>
    isGrid ? setLayoutMode("list") : setLayoutMode("grid");

  return (
    <HostListBase>
      <Header>
        <input type="checkbox" onClick={handleClick} value={layoutMode} />
        <label>{isGrid ? "Show as list" : "Show as grid"}</label>
      </Header>
      <Container mode={layoutMode}>
        {hosts.map((host) => (
          <Card host={host} key={`${host.hostName}`} />
        ))}
      </Container>
    </HostListBase>
  );
};

export default HostList;
