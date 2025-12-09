/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // dev backend url
    API_URL: "http://localhost:5000/api/v1",

    // live backend url
    // API_URL: "",

    // frontend live url
    FRONTEND_URL: "",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
