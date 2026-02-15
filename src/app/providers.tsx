"use client";

import { ApolloProvider } from "@apollo/client/react";
import { ReactNode, useMemo } from "react";
import createClient from "@/lib/graphql-client";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children } : ProvidersProps) {
    const client = useMemo(() => createClient(), []);
    return (
        <ApolloProvider client={client}>
        {children}
        </ApolloProvider>
    );
}