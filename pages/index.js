import Head from "next/head";
import DashboardShell from "@/components/DashboardShell";
import { Bar } from "react-chartjs-2";
import StatsGrid from "@/components/StatsGrid";
import AutoTable from "@/components/AutoTable";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import stripTimestamps from "../utils/stripTimestamps";

export default function Home(props) {
  const title = "Curve Gauge Voting Analytics";
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardShell title={title}>
        <div className="mx-6 md:mx-12 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 bg-white shadow rounded-lg w-full h-96 pr-8 md:pr-12 pt-6 pb-6">
              <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
                Number of daily Curve vote transactions
              </dt>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={props.dailyVotes}
                  margin={{
                    top: 25,
                    left: 2,
                    right: 10,
                    bottom: 35,
                  }}
                >
                  <CartesianGrid horizontal={false} vertical={false} />
                  <XAxis dataKey="DATE" minTickGap={20} />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="VOTE_TRANSACTIONS"
                    stroke="#8884d8"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div>
              <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1">
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Vote transactions in the last 2 weeks
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {props.votesTwoWeeks[0].VOTE_TRANSACTIONS}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Vote transactions to date
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {props.votesToDate[0].VOTE_TRANSACTIONS}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-12">
            <div className="mb-24 bg-white shadow rounded-lg w-full h-96 pr-8 md:pr-12 pt-6 pb-6">
              <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
                Daily curve votes of the top 10 most frequent addresses
              </dt>
              <div className="w-full h-96">
                <iframe
                  src="https://velocity-app.flipsidecrypto.com/velocity/visuals/5c8621e3-c466-49fd-b49b-f4aa5e4f53f3/5d4b85ba-c66a-4454-81e2-2920b94d3bf2"
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg w-full">
            <AutoTable data={props.topTenAddr} />
          </div>
        </div>
      </DashboardShell>
    </div>
  );
}

export async function getServerSideProps(context) {
  const [
    dailyVotesData,
    votesTwoWeeks,
    votesToDate,
    transferValues,
    topTenAddr,
  ] = await Promise.all([
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/c06422b9-833e-4ec9-a47c-df5223532b9f/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/da02c123-c7fd-468d-a4f1-9eec83f9d532/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/dc854ea0-1a2a-458b-8cad-decf89b07660/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/8aa166e2-431e-44e9-8197-09b9ac29d29f/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/e0a93ec8-6629-425b-af08-6d87bf17fe8d/data/latest`
    ).then((r) => r.json()),
  ]);
  const dailyVotes = stripTimestamps(dailyVotesData);
  // const dailyVotesAddr = {
  //   labels: [...new Set(dailyVotesAddrRaw.map((entry) => entry.DATE))],
  //   datasets: [
  //     {
  //       label: "Normal",
  //       data: holdersDist
  //         .filter((entry) => {
  //           return (
  //             entry.HOLDER == `"0x431e81e5dfb5a24541b5ff8762bdef3f32f96354"`
  //           );
  //         })
  //         .map((entry) => entry["COUNT(DISTINCT ADDRESS)"]),
  //       backgroundColor: "rgb(54, 162, 235)",
  //     },
  //     {
  //       label: "Whales",
  //       data: holdersDist
  //         .filter((entry) => {
  //           return entry.HOLDER == "Whale";
  //         })
  //         .map((entry) => entry["COUNT(DISTINCT ADDRESS)"]),

  //       backgroundColor: "rgb(255, 99, 132)",
  //     },
  //   ],
  // };

  return {
    props: {
      dailyVotes,
      votesTwoWeeks,
      votesToDate,
      transferValues,
      topTenAddr,
    }, // will be passed to the page component as props
  };
}
