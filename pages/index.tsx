import * as React from "react";
import { GetServerSideProps, GetStaticProps } from "next";

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
  const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState();

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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let error = null;
//   let item: Item[];

//   try {
//     // item = await fetchData("/upcoming/get");
//   } catch (error) {
//     console.log("error", error.message);
//     // error = error;
//   }

//   return {
//     props: { item },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  let items: Item[],
    error = null;
  try {
    // let buffer = fs.readFileSync("Data.json");
    // data = JSON.parse(await buffer.toString("utf-8"));
    items = await fetchData("/upcoming/get");
    console.log();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { items },
  };
};

export default Home;
