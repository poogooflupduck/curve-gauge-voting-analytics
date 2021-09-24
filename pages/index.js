import Head from "next/head";
import DashboardShell from "@/components/DashboardShell";
// import { Bar } from "react-chartjs-2";
import StatsGrid from "@/components/StatsGrid";
import AutoTable from "@/components/AutoTable";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Bar,
  BarChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { stripTimestamps } from "../utils/stripTimestamps";

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
        <div className="mx-6 md:mx-12 space-y-3">
          <div className="px-6 py-6 space-y-4 col-span-full	 bg-white shadow rounded-lg w-full h-auto">
            <h2 className="text-xl font-medium text-gray-800">
              Curve Gauge Voting Analytics
            </h2>
            <p>
              Liquidity providers on Curve can earn more CRV rewards using gauge
              voting. By locking up CRV into veCRV (vote-escrowed CRV) and using
              it to vote for a particular pool (gauge), users increase the share
              of CRV rewards distributed to that pool. Users can vote every 10
              days. When and where are their votes going?
            </p>
          </div>
          <div id="top" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="px-6 py-6 space-y-4 col-span-full	 bg-white shadow rounded-lg w-full h-auto">
              <h2 className="text-xl font-medium text-gray-800">
                Vote transactions
              </h2>
              <p>
                How much gauge voting takes place, and when? The frequency of
                votes cast depends on a variety of factors, including gas fees,
                competition between gauges, and the voting activity of
                protocols/DAOs holding veCRV.
              </p>
            </div>
            <div className="col-span-full	md:col-span-2 bg-white shadow rounded-lg w-full h-96 pr-8 md:pr-12 pt-6 pb-6">
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
            <div className="col-span-full md:col-span-1">
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
                <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Highest number of vote transactions in a single day
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {props.maxDailyVote[0].MAX}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div id="addresses">
            <div className="px-6 py-6 space-y-4 col-span-full	bg-white shadow rounded-lg w-full h-auto">
              <h2 className="text-xl font-medium text-gray-800">
                Top Addresses
              </h2>
              <p>
                Who is voting the most? Protocols Yearn Finance and Convex
                Finance come in at the top, leveraging their users' CRV to put
                in frequent votes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-12">
              <div className="bg-white shadow rounded-lg w-full px-8">
                {/* <Bar data={data} options={options} /> */}
              </div>
              <div className="bg-white shadow rounded-lg w-full px-8">
                {/* <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
                Daily curve votes of the top 10 most frequent addresses
              </dt> */}
                <div className="">
                  <div
                    className="w-full"
                    style={{
                      height: "30em",
                    }}
                  >
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
            </div>
          </div>
          <div className="">
            <AutoTable data={props.topTenAddr} />
          </div>
          <div id="gauges" className="space-y-4">
            <div className="px-6 py-6 space-y-4 col-span-full	bg-white shadow rounded-lg w-full h-auto">
              <h2 className="text-xl font-medium text-gray-800">Gauges</h2>
              <p>
                Which gauges are getting the most votes? Users can choose a
                percentage of their voting power (weight) to allocate to a
                gauge. Each vote carries 0 to 10,000 points (10000 = 100% of a
                user's voting power). Which gauge gets the highest allocation
                points on average?
              </p>
            </div>
            <div className="bg-white shadow rounded-lg w-full h-96 pr-8 md:pr-12 pt-6 pb-6">
              <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
                Top Curve gauges (by number of positive vote transactions to
                date)
              </dt>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={props.topGaugesVotes}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="LABEL" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="VOTE_TRANSACTIONS" fill="#8884d8">
                    {" "}
                    {props.topGaugesVotes.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          "#" +
                          Math.floor(Math.random() * 16777215).toString(16)
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white shadow rounded-lg w-full h-96 pr-8 md:pr-12 pt-6 pb-6">
              <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
                Top Curve gauges (by average vote weight to date, assumes each
                vote transaction is equally powerful)
              </dt>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={props.topGaugesAvg}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="LABEL" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="AVG_VOTE_WEIGHT" fill="#8884d8">
                    {" "}
                    {props.topGaugesAvg.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          "#" +
                          Math.floor(Math.random() * 16777215).toString(16)
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div id="power">
            <div className="px-6 py-6 space-y-4	bg-white shadow rounded-lg w-full h-auto">
              <h2 className="text-xl font-medium text-gray-800">
                Voting power
              </h2>
              <p>
                veCRV voting determines how newly minted CRV is distributed
                across pools. What is the ratio of veCRV:CRV distributed?
                <br />
                <br />
                Convex finance deploys as a gauge voting strategy on Curve.
                Convex allows users to lock up its native token, CVX, which then
                gives users power to influence how the platform will vote on
                Curve gauges. What is the ratio of locked CVX:CRV distributed?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-full h-96">
                <iframe
                  src="https://dune.xyz/embeds/162985/318721/de3a0794-ba9d-4aa7-95ca-df7a7ee28976"
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                ></iframe>
              </div>
              <div className="w-full h-96">
                <iframe
                  src="https://dune.xyz/embeds/162947/318614/0496f06a-a80c-4704-a9c4-3713da19eb6d"
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                ></iframe>
              </div>
              <div className="col-span-full w-full h-96">
                <iframe
                  src="https://dune.xyz/embeds/165817/322814/656befa3-285b-4087-b653-7cd1cefae4b5"
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
    maxDailyVote,
    dailyVotesTopAddr,
    topTenAddr,
    topGaugesVotes,
    topGaugesAvg,
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
      `https://api.flipsidecrypto.com/api/v2/queries/6da6c58a-2207-43ef-91d4-5802d64a315b/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/5d4b85ba-c66a-4454-81e2-2920b94d3bf2/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/e0a93ec8-6629-425b-af08-6d87bf17fe8d/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/65b508ec-1cbc-40d0-9a6d-c7064d2588af/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/dd968774-d120-4c0f-8882-30b70c79c639/data/latest`
    ).then((r) => r.json()),
  ]);
  const dailyVotes = stripTimestamps(dailyVotesData);

  return {
    props: {
      dailyVotes,
      votesTwoWeeks,
      votesToDate,
      maxDailyVote,
      dailyVotesTopAddr,
      topTenAddr,
      topGaugesVotes,
      topGaugesAvg,
    }, // will be passed to the page component as props
  };
}
