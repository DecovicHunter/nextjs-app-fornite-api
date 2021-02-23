import React from "react";
import { useRouter } from "next/router";
import fs from "fs";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

import { fetchData } from "../../dataFetch";
import { Item } from "../../types";
import Loading from "../../components/Loading";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface IItemProps {
  item: Item;
}

const ItemDetails: React.FC<IItemProps> = ({ item }) => {
  if (!item) {
    return <Loading />;
  }
  const router = useRouter();
  const filledstar = Math.round(item?.item?.ratings.avgStars);
  const rating = Array.from({ length: filledstar }, (_, index) => {
    return index;
  });

  return (
    <div className="md:p-12 bg-gray-100 min-h-screen ">
      <div key={item?.itemId} className=" h-full relative">
        <a
          onClick={() => router.back()}
          className="inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer"
        >
          Go back
        </a>
        <div className="bg-gray-800 rounded-2xl m-2 overflow-hidden flex flex-1 justify-center">
          <img
            src={item.item?.images?.icon}
            className="object-cover "
            alt={item.item.description}
          />
        </div>
        <div className="p-4 flex-col  h-full">
          <h1 className="text-4xl font-bold my-4 ">{item.item.name}</h1>
          <Detail title={"Type"} value={item.item.type} />
          <Detail title={"Description"} value={item.item.description} />
          <Detail title={"Cost"} value={item.item.cost} />
          <Detail title={"Rarity"} value={item.item.rarity} />
          <Detail title={"Series"} value={item.item.series} />

          <div className="flex text-center align-middle">
            <p className="inline font-bold text-lg">
              Stars
              <p className="inline-block">
                ({Math.round(item.item.ratings.avgStars)})
              </p>
              :
            </p>
            {rating?.map((value) => (
              <img key={value} src={prefix + "/icons/star.svg"} width="20" />
            ))}
            {"  "}
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = ({ title, value }: { title: string; value: string }) => (
  <div>
    <p className="inline font-bold text-lg">{title}: </p>
    <p className="inline"> {value} </p>
  </div>
);

const sleep = (milliseconds: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  let item: Item;

  try {
    // item = await fetchData("/item/get?id=" + itemId);
    const buffer = fs.readFileSync("Data.json");
    const itemDatas = JSON.parse(await buffer.toString("utf-8"));
    item = itemDatas.filter((item) => item.itemId == id)[0];
  } catch (error) {
    // console.log(error);
  }

  return {
    props: { item },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let items: Item[];

  try {
    // items = await fetchData("/upcoming/get");
    const buffer = fs.readFileSync("Data.json");
    items = JSON.parse(await buffer.toString("utf-8"));
  } catch (error) {
    // console.log(error);
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
