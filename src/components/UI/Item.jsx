import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return <img src={item.image} alt={item.name} />;
}

export default Item;
