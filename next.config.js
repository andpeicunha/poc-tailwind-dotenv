// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

require("dotenv").config();

module.exports = {
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
  },
};
