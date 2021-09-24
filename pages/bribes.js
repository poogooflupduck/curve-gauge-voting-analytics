import Head from "next/head";
import DashboardShell from "@/components/DashboardShell";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Bar } from "react-chartjs-2";
import { stripTimestampsKey } from "utils/stripTimestamps";
import moment from "moment";
import "chartjs-adapter-moment";

function Bribes(props) {
  const title = "veCRV Bribes - Curve Gauge Voting Analytics";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <DashboardShell title={title}>
        <div className="mx-6 md:mx-12 space-y-6">
          <div className="px-6 py-6 space-y-4 bg-white shadow rounded-lg w-full h-auto">
            <h2 className="text-xl font-medium text-gray-800">veCRV Bribes</h2>
            <p>
              <a
                className="italic"
                target="_blank"
                href="https://bribe.crv.finance"
              >
                bribe.crv.finance
              </a>{" "}
              was created by Andre Cronje (Yearn Finance) to allow streamlined
              bribing of veCRV holders.
              <br />
              <br />
              Projects and protocols that want to increase liquidity through
              Curve's pools can incentivize veCRV holders to vote for their
              gauge. Gauges with more voting power receive more CRV, attracting
              liquidity to the gauge. In return for votes, veCRV holders can
              claim reward tokens put up by projects.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500">
                Total bribe rewards (in USD) put up in the last 2 weeks
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {(props.bribesTotalTwoWeeks[0].TOTAL / 1000000).toPrecision(3) +
                  " million"}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500">
                Total bribe rewards (in USD) put up to date
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {(props.bribesTotal[0].TOTAL / 1000000).toPrecision(3) +
                  " million"}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500">
                Number of bribes with value over $5k
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {props.bribes5k[0].BRIBES}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500">
                Number of bribe reward claim transactions to date
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {props.numberClaims[0].CLAIMS}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500">
                Number of bribe reward recipients
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {props.claimRecipients[0].RECIPIENTS}
              </dd>
            </div>
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500">
                Average bribe reward claim (in USD)
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {props.avgClaim[0].AVERAGE_CLAIM.toFixed(2)}
              </dd>
            </div>
          </dl>
          <div className="bg-white shadow rounded-lg w-full h-auto pr-8 md:pr-12 pt-6 pb-6">
            <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
              Bribe rewards (in USD) put up to date
            </dt>
            <div className="">
              <div
                className="w-full"
                style={{
                  height: "30em",
                }}
              >
                <iframe
                  src="https://velocity-app.flipsidecrypto.com/velocity/visuals/0d487d5f-a60c-47a6-93bf-fdbbd96245ca/f779379f-dc69-438d-9243-b52cb409518b"
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

          <div
            className="bg-white shadow rounded-lg w-full pt-6 pb-12"
            style={{
              height: "30em",
            }}
          >
            <dt className="px-6 py-2 text-sm font-medium text-gray-500 truncate">
              Bribe rewards (in USD) put up to date, categorized by reward token{" "}
            </dt>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={800} height={800}>
                <Pie
                  dataKey="TOTAL_VALUE"
                  nameKey="SYMBOL"
                  isAnimationActive={false}
                  data={props.bribesByProject}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {props.bribesByProject.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        "#" + Math.floor(Math.random() * 16777215).toString(16)
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </DashboardShell>
    </div>
  );
}

export default Bribes;

export async function getServerSideProps(context) {
  const [
    bribesTime,
    bribesTotal,
    bribesTotalTwoWeeks,
    bribes5k,
    bribesByProject,
    numberClaims,
    avgClaim,
    claimRecipients,
  ] = await Promise.all([
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/f779379f-dc69-438d-9243-b52cb409518b/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/8d55eee7-5f23-4b66-9c23-3026e89b7418/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/f2c48c42-1c0b-4b13-a5bd-2b74f795948d/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/47a7b02b-0a71-408c-a593-f147546ad970/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/e15d5ed9-ba2a-4b09-b3fd-c3f38d2fee1c/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/b04e8dc4-c107-47e0-ab40-10f60868be86/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/be24c9f6-7595-4213-8d69-c56de37f3895/data/latest`
    ).then((r) => r.json()),
    fetch(
      `https://api.flipsidecrypto.com/api/v2/queries/be687b7a-66f4-4435-a5f1-59691f7f4309/data/latest`
    ).then((r) => r.json()),
  ]);

  return {
    props: {
      bribesTime,
      bribesTotal,
      bribesTotalTwoWeeks,
      bribes5k,
      bribesByProject,
      numberClaims,
      avgClaim,
      claimRecipients,
    },
  };
}
