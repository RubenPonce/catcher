import { gql } from "apollo-boost";

export const GET_CHANNELS = gql`
  query Get_Channels {
    channels {
      name
      mediaProvider
      channelId
      lastLive
      __typename
    }
  }
`;
