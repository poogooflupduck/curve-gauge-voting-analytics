import Head from "next/head";
import DashboardShell from "@/components/DashboardShell";

function About(props) {
  const title = "About - Curve Gauge Voting Analytics";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <DashboardShell title={title}>
        <div className="mx-6 md:mx-12 space-y-6">
          <div className="space-y-2">
            <p>This dashboard was created by @karlxlee.</p>
            <h2 className="font-bold">Data sources</h2>
            <p>Data was sourced from Flipside Crypto and Dune.</p>
            <h2 className="font-bold">
              Vote transactions, top addresses and gauges analysis
            </h2>
            <p>
              Vote transactions were analyzed by looking at ethereum events that
              were labelled with 'VoteForGauge' and involving the Curve gauge
              controller contract. Gauges were manually tagged using the gauge
              addresses list in Curve's documentation.{" "}
            </p>
            <h2 className="font-bold">Voting power analysis</h2>
            <p>
              Data was sourced from Dune. To calculate veCRV:CRV ratios, two
              queries were used: one from @karenos / total crv minted, and
              @jshogren - "CRV veCRV Tracker". These were forked, modified, and
              combined to create a ratio metric. The ratio for Convex locked
              CVX:CRV was written using standard Dune documentation queries and
              the same query from @karenos / total crv minted
            </p>
            <h2 className="font-bold">Bribes analysis</h2>
            <p>
              Bribes were analyzed by looking at ethereum events involving the
              bribe v2 contract (0x7893bbb46613d7a4fbcc31dab4c9b823ffee1026)
              from bribes.crv.finance. Average token prices on the day of the
              bribe transaction are used to calcualte the USD value of bribes.
            </p>
            <h2 className="font-bold">Visualizations</h2>
            <p>Rechart and Chart.js were used to produce visualizations.</p>
          </div>
        </div>
      </DashboardShell>
    </div>
  );
}

export default About;
