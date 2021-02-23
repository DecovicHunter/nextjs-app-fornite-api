import React from "react";
import { useRouter } from "next/router";
import fs from "fs";

import { fetchData } from "../../dataFetch";
import { Item } from "../../types";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Loading from "../../components/Loading";

interface IItemProps {
  item: Item;
}

<<<<<<< HEAD
const ItemDetails: React.FC<IItemProps> = ({ item }) => {
  if (!item) {
=======
const ItemDetails: React.FC<IItemProps> = ({ data }) => {
  if (!data) {
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8
    return <Loading />;
  }
  const router = useRouter();
  const filledstar = Math.round(item?.item?.ratings.avgStars);
<<<<<<< HEAD
  const rating = Array.from({ length: filledstar }, (_, index) => {
    return index;
  });
=======
  const ratings = Array.from({ length: filledstar }, (_, index) => index);
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8

  return (
    <div className="md:p-12 bg-gray-100 min-h-screen ">
      <div key={item?.itemId} className=" h-full relative">
        <a
          onClick={() => router.back()}
          className="inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer"
        >
          Go back
        </a>
        <div className="bg-gray-800 rounded-xl  mx-2 overflow-hidden flex flex-1 justify-center">
          <img
            src={item.item?.images?.icon}
            className="object-cover "
<<<<<<< HEAD
            alt={item.item.description}
=======
            alt={itemitem.item.description}
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8
          />
        </div>
        <div className="p-4 flex-col  h-full">
          <h1 className="text-3xl font-bold my-5  ">{item.item.name}</h1>
          <div>
            <p className="inline font-bold text-lg">Type:</p>
            <p className="inline">{item.item.type}</p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Description:</p>{" "}
            <p className="text-gray-800  text-sm inline-block ">
              {item.item.description}
            </p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Cost:</p>
            {"  "}
            <p className="text-gray-800  text-sm inline">{item.item.cost}</p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Rarity:</p>{" "}
            <p className="text-gray-800  text-sm inline-block ">
              {item.item.rarity}
            </p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Series:</p>{" "}
            <p className="text-gray-800  text-sm inline-block ">
              {item.item.series}
            </p>
          </div>
          <div className="flex text-center align-middle">
            <p className="inline font-bold text-lg">Stars: </p>{" "}
            {ratings?.map((vaue) => (
              <img key={value} src="/icons/star.svg" width="20" />
            ))}
            {"  "}
            <p className="inline-block">
              ({Math.round(item.item.ratings.avgStars)})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
const sleep = (milliseconds: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

export const getStaticProps: GetStaticProps = async (context) => {
  const itemId = context.params.id;
  let item: Item;

  try {
    // item = await fetchData("/item/get?id=" + itemId);
    const buffer = fs.readFileSync("Data.json");
    const itemDatas = JSON.parse(await buffer.toString("utf-8"));
    item = itemDatas.filter((item) => item.itemId == itemId)[0];
  } catch (error) {
    // console.log(error);
=======
export const getStaticProps: GetStaticProps = async (context) => {
  const itemId = context.params.id;
  let item: item;
  try {
    // data = await fetchData("/item/get?id=" + itemId);
    let buffer = fs.readFileSync("Data.json");
    const items = JSON.parse(await buffer.toString("utf-8"));
    item = items.filter((item) => item.itemId == itemId)[0];
  } catch (error) {
    //console.log(error);
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8
  }

  return {
    props: { item },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
<<<<<<< HEAD
  let items: Item[] = [];

  try {
    // items = await fetchData("/upcoming/get");
    const buffer = fs.readFileSync("Data.json");
    const items = JSON.parse(await buffer.toString("utf-8"));
    console.log(items);
  } catch (error) {
    // console.log(error);
=======
  let items: item[];

  try {
    let buffer = fs.readFileSync("Data.json");
    items = JSON.parse(await buffer.toString("utf-8"));
  } catch (error) {
   // console.log(error);
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8
  }

  const paths = items.map((item) => ({
    params: { id: item.itemId.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ItemDetails;
