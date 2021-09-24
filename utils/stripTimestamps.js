import moment from "moment";

export function stripTimestamps(data) {
  const formattedData = [];
  for (let i in data) {
    formattedData.push({
      ...data[i],
      DATE: data[i].DATE.split("T")[0],
    });
  }
  return formattedData;
}

export function stripTimestampsKey(data, key) {
  const formattedData = [];
  for (let i in data) {
    formattedData.push({
      ...data[i],
    });
    formattedData[i][key] = data[i][key].split("T")[0];
  }
  return formattedData;
}
