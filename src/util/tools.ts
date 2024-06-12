import { formatDistance } from "date-fns";

export const formatTimestamp = (timestamp: Date) => {
  return formatDistance(timestamp, new Date(), { addSuffix: true });
};
