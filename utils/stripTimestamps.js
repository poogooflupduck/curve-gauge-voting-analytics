import moment from "moment";

export default function stripTimestamps(data) {
  const formattedData = [];
  for (let i in data) {
    formattedData.push({
      ...data[i],
      DATE: data[i].DATE.split("T")[0],
    });
  }
  return formattedData;
}
