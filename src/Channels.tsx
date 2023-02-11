import { useQuery } from "@apollo/react-hooks";
import { GET_CHANNELS } from "./queries/getChannels";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
export const Channels = () => {
  const {
    loading,
    error,
    data: channels,
  } = useQuery(GET_CHANNELS, {
    variables: { limit: 5 },
  });
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    console.log(error);
    return <h1>Error. Check console.</h1>;
  }
  const channelArray = channels.channels.map(
    (channel: {
      name: string;
      mediaProvider: string;
      channelId: string;
      lastLive: string;
      isLive: boolean;
      lastUrl: string;
    }) => {
      return (
        <Card
          sx={{ minWidth: 175, margin: 5 }}
          variant="outlined"
          key={`${channel.channelId}${channel.mediaProvider}`}
        >
          <CardContent>
            <Typography>{channel.name}</Typography>
            <Typography>platform: {channel.mediaProvider}</Typography>
            <Typography> id: {channel.channelId}</Typography>
            <Typography>Last live: {channel.lastLive}</Typography>
            <Link href={channel.lastUrl}>
              {channel.isLive ? "LIVE NOW!" : "Previously Live"}
            </Link>
          </CardContent>
        </Card>
      );
    }
  );
  return <div>{channelArray}</div>;
};
