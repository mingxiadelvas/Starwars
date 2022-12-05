import React, { useState } from "react";
import { Table, Select, Col, Row, Input } from "antd";
import { StarshipsColumns } from "./StarshipsColumns";
import { PeopleColumns } from "./PeopleColumns";
import { PlanetsColumns } from "./PlanetsColumns";

const StarwarsTable = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [value, setValue] = useState("");

  const selectLayer = (selectedLayer) => {
    let url;
    let table;
    switch (selectedLayer) {
      case "starships":
        url = "https://swapi.py4e.com/api/starships/";
        table = StarshipsColumns;
        break;
      case "people":
        url = "https://swapi.py4e.com/api/people/";
        table = PeopleColumns;
        break;
      case "planets":
        url = "https://swapi.py4e.com/api/planets/";
        table = PlanetsColumns;
        break;
      default:
        url = "https://swapi.py4e.com/api/people/";
        table = PeopleColumns;
        break;
    }

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        setData(data.results);
        setColumns(table);
      });
  };

  return (
    <>
      <Row wrap={false}>
        <Col flex="none">
          <Select style={{ width: 120 }} defaultValue="Starwars" onChange={selectLayer}>
            <Select.Option value="starships">Starships</Select.Option>
            <Select.Option value="people">People</Select.Option>
            <Select.Option value="planets">Planets</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Input
            placeholder="Search Name"
            value={value}
            onChange={(e) => {
              const currValue = e.target.value;
              setValue(currValue);
              const filteredData = data.filter((entry) =>
                entry.name.includes(currValue)
              );
              setData(filteredData);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Table rowKey="name" dataSource={data} columns={columns} />
      </Row>
    </>
  );
};

export default StarwarsTable;
