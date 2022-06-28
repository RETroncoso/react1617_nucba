import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

import { BandsContainerStyled, BandsErrorMessageStyled } from "./BandsStyles";
import { Box, Button } from "@mui/material";
import { useBandsData } from "../../hooks/useBandsData";

const Bands = () => {
  const { data, isLoading, isError, error } = useBandsData();

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
      )}

      <BandsContainerStyled>
        {data?.data.map((band) => (
          <Card key={band.id} {...band} />
        ))}
      </BandsContainerStyled>
    </>
  );
};

export default Bands;
