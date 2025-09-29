import { Outlet, useNavigation } from "react-router";

import Header from "./Header";
import Container from "./Common/Container";
import Loader from "./Common/Loader";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      <Container>
        {navigation.state === "loading" ? (
          <Loader size="lg" position="center" />
        ) : (
          <Outlet />
        )}
      </Container>
    </>
  );
}
