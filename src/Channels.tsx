import { useQuery } from "@apollo/react-hooks";
import { GET_CHANNELS } from "./queries/getChannels";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export const Channels = () => {
  const {
    loading,
    error,
    data: channels,
  } = useQuery(GET_CHANNELS, {
    variables: { limit: 5 },
  });
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  const channelArray = channels.channels.map(
    (channel: {
      name: string;
      mediaProvider: string;
      channelId: string;
      lastLive: string;
    }) => {
      return (
        <Card sx={{ minWidth: 175, margin: 5 }} variant="outlined">
          <CardContent>
            <Typography>{channel.name}</Typography>
            <Typography>platform: {channel.mediaProvider}</Typography>
            <Typography> id: {channel.channelId}</Typography>
            <Typography>Last live: {channel.lastLive}</Typography>
          </CardContent>
        </Card>
      );
    }
  );
  return <div>{channelArray}</div>;
};
