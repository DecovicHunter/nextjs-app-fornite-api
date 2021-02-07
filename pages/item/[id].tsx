import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";

import { fetchData } from "../../dataFetch";
import { Item as item } from "../../types";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Loading from "../../components/Loading";

interface IItemProps {
  data: item;
}

const Item: React.FC<IItemProps> = ({ data }) => {
  if (!data) {
    return <Loading />;
  }
  const router = useRouter();
  const filledstar = Math.round(data?.item?.ratings.avgStars);
  const rating = Array.from({ length: filledstar }, (_, index) => {
    return index;
  });

  return (
    <div className="md:p-12 bg-gray-100 min-h-screen ">
      <div key={data?.itemId} className=" h-full relative">
        <a
          onClick={() => router.back()}
          className="inline-block absolute md:top-5 md:left-5  top-2 left-2 font-bold p-2 text-gray-100 cursor-pointer"
        >
          Go back
        </a>
        <div className="bg-gray-800 rounded-xl  mx-2 overflow-hidden flex flex-1 justify-center">
          <img
            src={data.item?.images?.icon}
            className="object-cover "
            alt={data.item.description}
          />
        </div>
        <div className="p-4 flex-col  h-full">
          <h1 className="text-3xl font-bold my-5  ">{data.item.name}</h1>
          <div>
            <p className="inline font-bold text-lg">Type:</p>
            <p className="inline">{data.item.type}</p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Description:</p>{" "}
            <p className="text-gray-800  text-sm inline-block ">
              {data.item.description}
            </p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Cost:</p>
            {"  "}
            <p className="text-gray-800  text-sm inline">{data.item.cost}</p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Rarity:</p>{" "}
            <p className="text-gray-800  text-sm inline-block ">
              {data.item.rarity}
            </p>
          </div>
          <div>
            <p className="inline font-bold text-lg">Series:</p>{" "}
            <p className="text-gray-800  text-sm inline-block ">
              {data.item.series}
            </p>
          </div>
          <div className="flex text-center align-middle">
            <p className="inline font-bold text-lg">Stars: </p>{" "}
            {rating?.map((_, index) => (
              <img key={index} src="/icons/star.svg" width="20" />
            ))}
            {"  "}
            <p className="inline-block">
              ({Math.round(data.item.ratings.avgStars)})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const itemId = context.params.id;
//   let data: item;
//   try {
//     data = await fetchData("/item/get?id=" + itemId);
//   } catch (error) {
//     // console.log(error);
//   }

//   return {
//     props: { data },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  const itemId = context.params.id;
  let data: item;
  try {
    // data = await fetchData("/item/get?id=" + itemId);
    let buffer = fs.readFileSync("Data.json");
    const datas = JSON.parse(await buffer.toString("utf-8"));
    data = datas.filter((item) => item.itemId == itemId)[0];
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: { data },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async (
  context
) => {
  let data: item[];

  try {
    let buffer = fs.readFileSync("Data.json");
    data = JSON.parse(await buffer.toString("utf-8"));
  } catch (error) {
    console.log(error);
  }

  const paths = data.map((item) => ({
    params: { id: item.itemId.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Item;
