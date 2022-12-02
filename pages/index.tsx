import HostList from "../src/components/HostList";
import { fetchHosts } from "../src/redux/slices/appsByHost";
import { Host } from "../src/domain/type";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import { Wrapper } from "./styles";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const hostList = useAppSelector((state) => state.appsByHost.data);

  useEffect(() => {
    dispatch(fetchHosts());
  }, [dispatch]);

  return (
    <Wrapper>
      <HostList hosts={hostList} />
    </Wrapper>
  );
}
