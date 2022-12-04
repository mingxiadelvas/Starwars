import React, { useState, useEffect } from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const columns = [
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "diameter",
    title: "Diameter",
    dataIndex: "diameter",
  },
  {
    key: "orbital_period",
    title: "Orbital Period",
    dataIndex: "orbital_period",
  },
  {
    key: "gravity",
    title: "Gravity",
    dataIndex: "gravity",
  },
  {
    key: "population",
    title: "Population",
    dataIndex: "population",
  },
  {
    key: "climate",
    title: "Climate",
    dataIndex: "climate",
  },
  {
    key: "terrain",
    title: "Terrain",
    dataIndex: "terrain",
  },
  {
    key: "surface_water",
    title: "Surface Water",
    dataIndex: "surface_water",
  },
  {
    key: "residents",
    title: "Residents",
    dataIndex: "residents",
    render: (text) => text.join("\n"),
  },
  {
    key: "films",
    title: "Films",
    dataIndex: "films",
    render: (text) => text.join("\n"),
  },
  {
    key: "url",
    title: "Url",
    dataIndex: "url",
  },
  {
    key: "created",
    title: "Created",
    dataIndex: "created",
  },
  {
    key: "edited",
    title: "Edited",
    dataIndex: "edited",
  },
];

const PlanetsTable = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch("https://swapi.py4e.com/api/planets/");
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      <Title>Planets</Title>
      <Table rowKey="name" columns={columns} dataSource={planets} />
    </>
  );
};

export default PlanetsTable;
