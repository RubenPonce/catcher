import { gql } from "apollo-boost";

export const GET_CHANNELS = gql`
  query Get_Channels {
    channels {
      name
      mediaProvider
      channelId
      isLive
      lastLive
      lastUrl
      __typename
    }
  }
`;
