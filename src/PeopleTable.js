import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Input, Space, Typography } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;

const PeopleTable = () => {
  const [people, setPeople] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const fetchPeople = async () => {
    const response = await fetch("https://swapi.py4e.com/api/people/");
    const data = await response.json();
    setPeople(data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, []);


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };


  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      ...getColumnSearchProps('name'),
    },
    {
      key: "eye_color",
      title: "Eye Color",
      dataIndex: "eye_color",
    },
    {
      key: "birth_year",
      title: "Birth Year",
      dataIndex: "birth_year",
    },
    {
      key: "gender",
      title: "Gender",
      dataIndex: "gender",
    },
    {
      key: "hair_color",
      title: "Hair Color",
      dataIndex: "hair_color",
    },
    {
      key: "height",
      title: "Height",
      dataIndex: "height",
    },
    {
      key: "mass",
      title: "Mass",
      dataIndex: "mass",
    },
    {
      key: "skin_color",
      title: "Skin Color",
      dataIndex: "skin_color",
    },
    {
      key: "homeworld",
      title: "Homeworld",
      dataIndex: "homeworld",
    },
    {
      key: "films",
      title: "Films",
      dataIndex: "films",
      render: (text) => text.join("\n"),
    },
    {
      key: "species",
      title: "Species",
      dataIndex: "species",
    },
    {
      key: "starships",
      title: "Starships",
      dataIndex: "starships",
      render: (text) => text.join("\n"),
    },
    {
      key: "vehicles",
      title: "Vehicles",
      dataIndex: "vehicles",
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

  return (
    <>
    <Title>People</Title>
      <Table
        rowKey="name"
        columns={columns}
        dataSource={people}
      />
    </>
  );
};

export default PeopleTable;
