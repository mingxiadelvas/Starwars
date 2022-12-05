export const PlanetsColumns = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "diameter", title: "Diameter", dataIndex: "diameter" },
  {
    key: "orbital_period",
    title: "Orbital Period",
    dataIndex: "orbital_period",
  },
  { key: "gravity", title: "Gravity", dataIndex: "gravity" },
  { key: "population", title: "Population", dataIndex: "population" },
  { key: "climate", title: "Climate", dataIndex: "climate" },
  { key: "terrain", title: "Terrain", dataIndex: "terrain" },
  { key: "surface_water", title: "Surface Water", dataIndex: "surface_water" },
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
  { key: "url", title: "Url", dataIndex: "url" },
  { key: "created", title: "Created", dataIndex: "created" },
  { key: "edited", title: "Edited", dataIndex: "edited" },
];

