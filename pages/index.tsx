import { useState } from "react";
import HostList from "../src/components/HostList";
import Modal from "../src/components/Modal";
import hostList from "../src/components/HostList/mock";
import { Wrapper } from "./styles";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <HostList hosts={hostList} />
      </Wrapper>
    </>
  );
}
