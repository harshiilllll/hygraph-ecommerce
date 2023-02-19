import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <div className="h-[70%] w-full">
        <Image
          className="productCardImage"
          height="2000"
          width="2000"
          src={product.image[0].url}
          alt={product.name}
        />
      </div>
      <div className="h-[30%] p-5 w-full flex flex-col">
        <span className="rounded-xl mb-1 bg-slate-100 text-xs w-fit px-3 py-[2px]">{product.categories[0].name}</span>
        <Link
          href={`/product/${product.slug}`}
          className="text-xl font-extrabold"
        >
          {product.name}
        </Link>
        <p>{product.excerpt}</p>
        <span className="font-semibold">Rs {product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
