
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  env:{
    NEXT_PUBLIC_ZEGO_APP_ID: process.env.ZEGO_APP_ID,
    NEXT_PUBLIC_ZEGO_SERVER_SECRET: process.env.ZEGO_SERVER_SECRET


  },



  images:{
    domains:["localhost"]

  }
};

module.exports = nextConfig;
