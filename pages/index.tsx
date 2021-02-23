import * as React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import fs from "fs";

import Loading from "../components/Loading";
import styles from "../styles/Home.module.css";
import { Item } from "../types";
import { fetchData } from "../dataFetch";
import ForniteList from "../components/ForniteList";

interface HomeProps {
  items: Item[];
}

const Home: React.FC<HomeProps> = ({ items }) => {
  // const [data, setData] = React.useState<Item[]>([]);
  // const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   fetchData("/upcoming/get")
  //     .then((data) => setData(data))
  //     .catch((err) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // if (error) {
  //   console.log(error);
  //   return;
  // }

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-2">
      <h1 className="block font-bold my-3 text-2xl text-center uppercase">
        fornite upcoming items
      </h1>
      <ForniteList items={items} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let items: Item[],
    error = null;
  try {
    // items = await fetchData("/upcoming/get");
    let buffer = fs.readFileSync("Data.json");
    items = JSON.parse(await buffer.toString("utf-8"));
  } catch (error) {
    console.log(error);
  }

  return {
    props: { items },
  };
};

export default Home;
