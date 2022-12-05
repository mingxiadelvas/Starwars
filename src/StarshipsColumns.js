export const StarshipsColumns = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "model", title: "Model", dataIndex: "model" },
  {
    key: "starship_class",
    title: "Starship Class",
    dataIndex: "starship_class",
  },
  { key: "manufacturer", title: "Manufacturer", dataIndex: "manufacturer" },
  {
    key: "cost_in_credits",
    title: "Cost In Credits",
    dataIndex: "cost_in_credits",
  },
  { key: "length", title: "Length", dataIndex: "length" },
  { key: "crew", title: "Crew", dataIndex: "crew" },
  { key: "passengers", title: "Passengers", dataIndex: "passengers" },
  {
    key: "max_atmosphering_speed",
    title: "Max Atmosphering Speed",
    dataIndex: "max_atmosphering_speed",
  },
  {
    key: "hyperdrive_rating",
    title: "Hyperdrive Rating",
    dataIndex: "hyperdrive_rating",
  },
  { key: "MGLT", title: "MGLT", dataIndex: "MGLT" },
  {
    key: "cargo_capacity",
    title: "Cargo Capacity",
    dataIndex: "cargo_capacity",
  },
  { key: "consumables", title: "Consumables", dataIndex: "consumables" },
  {
    key: "films",
    title: "Films",
    dataIndex: "films",
    render: (text) => text.join("\n"),
  },
  { key: "url", title: "Url", dataIndex: "url" },
  { key: "url", title: "Url", dataIndex: "url" },
  {
    key: "pilots",
    title: "Pilots",
    dataIndex: "pilots",
    render: (text) => text.join("\n"),
  },
  { key: "edited", title: "Edited", dataIndex: "edited" },
];

