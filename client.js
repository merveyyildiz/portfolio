import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(
    process.env.NEXT_GRAPHQL_URL,
    {
        headers: {}
    }
)