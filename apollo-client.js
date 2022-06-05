import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://towamencin.stepzen.net/api/joyous-owl/__graphql",
    headers: {
      Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
    },
    cache: new InMemoryCache(),
});

export default client;