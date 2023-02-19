import PostDetail from "@/components/PostDetail";
import { getProductDetail, getProducts } from "@/services";
import React from "react";
import { useRouter } from "next/router";

const PostDetails = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostDetail product={product.product} />
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getProductDetail(params.slug);
  return {
    props: { product: data },
  };
}

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
