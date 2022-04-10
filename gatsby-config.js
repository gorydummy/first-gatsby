module.exports = {
  siteMetadata: {
    title: `First Gatsby`,
    siteUrl: `https://gatsby.goryheadstump.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "first-gatsby-use",
      },
    },
  ]
}
