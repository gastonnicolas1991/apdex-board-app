import styles from "../styles/Home.module.css";
import HostList from "../src/components/HostList";
import hostList from "../src/components/HostList/mock";
import { Wrapper } from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <HostList hosts={hostList} />
    </Wrapper>
  );
}
