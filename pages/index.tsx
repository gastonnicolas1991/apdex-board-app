import HostList from "../src/components/HostList";
import { fetchHosts } from "../src/redux/slices/appsByHost";
import hostList from "../src/components/HostList/mock";
import { useAppDispatch } from "../src/hooks";
import { Wrapper } from "./styles";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHosts());
  }, [dispatch]);

  return (
    <Wrapper>
      <HostList hosts={hostList} />
    </Wrapper>
  );
}
