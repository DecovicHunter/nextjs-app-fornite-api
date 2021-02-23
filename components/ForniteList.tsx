import * as React from "react";
import { Item } from "../types";

import ForniteItem from "./ForniteItem";

interface ForniteListProps {
  items: Item[];
}

const ForniteList: React.FC<ForniteListProps> = ({ items }) => {
  return (
    <div className={"md:flex md:flex-wrap md:justify-center mt-12"}>
      {items?.map((item) => {
        return <ForniteItem item={item} key={item.itemId} />;
      })}
    </div>
  );
};
export default ForniteList;
