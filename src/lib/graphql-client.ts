"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export default function createClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: "https://graphql-pokemon2.vercel.app", // your GraphQL endpoint
        }),
        cache: new InMemoryCache(),
    });
}

