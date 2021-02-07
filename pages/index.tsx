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
  data: Item[];
}

const Home: React.FC<IHomeProps> = ({ data }) => {
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
        {data?.map((item) => {
          return (
            <Link href={"/item/" + item.itemId} key={item.itemId}>
              <a className="block  bg-gray-800 rounded-2xl m-2 h-full mx-4  md:w-1/4 hover:bg-gray-700 hover:z-10 transform hover:scale-105 transition-all ">
                <ForniteItem item={item} />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let error = null;
//   let data: Item[];

//   try {
//     let buffer = fs.readFileSync("Data.json");
//     data = JSON.parse(await buffer.toString("utf-8"));
//     // data = await fetchData("/upcoming/get");
//   } catch (error) {
//     console.log("error", error.message);
//     // error = error;
//   }

//   return {
//     props: { data },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  let data: Item[],
    error = null;
  try {
    let buffer = fs.readFileSync("Data.json");
    data = JSON.parse(await buffer.toString("utf-8"));
    data = await fetchData("/upcoming/get");
  } catch (error) {
    // console.log(error);
  }

  return {
    props: { data },
  };
};

export default Home;
