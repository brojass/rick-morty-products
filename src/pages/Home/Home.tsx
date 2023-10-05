import { useEffect, useState } from "react";
import { ItemList } from "../../features/ItemList/ItemList";
import { RickAndMortyAPI } from "../../api/rick-and-morty";
import CartProvider from "../../providers/CartProvider";

export const Home = () => {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    const rickAndMortyAPI = new RickAndMortyAPI();
    const itemsResponse = await rickAndMortyAPI.getItems();
    setItems(itemsResponse?.results);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (<CartProvider>
    <ItemList itemList={items} />
  </CartProvider>);
};
