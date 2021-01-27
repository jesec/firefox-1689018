import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Firefox BUG 1689018 PoC">
    <h1></h1>
    <p>
      <a download href="/api/download">
        a with download attribute
      </a>
    </p>
  </Layout>
);

export default IndexPage;
