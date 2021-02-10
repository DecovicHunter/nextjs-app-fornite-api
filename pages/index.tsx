import Link from "next/link";
import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import fs from "fs";

import ForniteItem from "../components/ForniteItem";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.css";
import { Item } from "../types";
import { fetchData } from "../dataFetch";

interface IHomeProps {
  items: Item[];
}

const Home: React.FC<IHomeProps> = ({ items }) => {
  // const [data, setData] = React.useState<Item[]>([]);
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState();

  // React.useEffect(() => {
  //   fetchData("/upcoming/get")
  //     .then((data) => setData(data))
  //     .catch((err) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   console.log(error);
  //   return;
  // }
  return (
    <div className="p-2">
      <h1 className="block font-bold my-3 text-2xl text-center uppercase">
        fornite upcoming items
      </h1>
      <div className={"md:flex md:flex-wrap md:justify-center mt-12"}>
        {items?.map((item) => {
          return (
               <ForniteItem item={item}  key={item.itemId} />
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let items: Item[],
    error = null;
  try {
    let buffer = fs.readFileSync("Data.json");
    items = JSON.parse(await buffer.toString("utf-8"));
    // items = await fetchData("/upcoming/get");
  } catch (error) {
    // console.log(error);
  }

  return {
    props: { items },
  };
};

export default Home;
