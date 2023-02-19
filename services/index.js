import { request, gql } from "graphql-request";
const graphqlAPI = process.env.GRAPHQL_PUBLIC_API_KEY;

export const getProducts = async () => {
  const query = gql`
    query MyQuery {
      productsConnection {
        edges {
          node {
            name
            price
            stock
            slug
            excerpt
            image {
              url
            }
            categories {
              name
              slug
            }
            description {
              html
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.productsConnection.edges;
};
