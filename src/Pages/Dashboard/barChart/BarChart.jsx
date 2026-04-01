import React from "react";
import { Box } from "@mui/material";
import Bar from "./bar";
import Header from './../../../Components/Dashboard/Header';

const BarChart = () => {
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;
