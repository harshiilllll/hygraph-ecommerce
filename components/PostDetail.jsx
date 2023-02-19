import Head from "next/head";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

const PostDetail = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{product.name} | EcommerceApp</title>
      </Head>
      <div className="flex gap-4 p-5">
        <div className="flex flex-col w-[50%]">
          <Image
            height={2000}
            width={2000}
            alt={product.name}
            src={product.image[0].url}
            className="h-50 w-full object-cover"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="text-4xl">{product.name}</h1>
          <p>{product.excerpt}</p>
          <div className="productDescription">
            {parse(product.description.html)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
