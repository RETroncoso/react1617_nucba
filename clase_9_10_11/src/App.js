import { AppContainerStyled } from "./AppStyles";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import Card from "./components/card/Card";
import { GlobalStyles } from "./styles/GlobalStyles";
import Loader from "./components/loader/Loader";

const fetchBands = () => {
  return axios.get("http://localhost:3006/bandas");
};

function App() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "bands",
    fetchBands,
    {
      staleTime: 5000,
    }
  );

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <h2 style={{ color: "red", textAlign: "center" }}>{error.message}</h2>
      )}
      <AppContainerStyled>
        {data?.data.map((band) => (
          <Card key={band.id} {...band} />
        ))}
      </AppContainerStyled>

      <ReactQueryDevtools />
      <GlobalStyles />
    </>
  );
}

export default App;
