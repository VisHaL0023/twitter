/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "twitter-dev-vishal.s3.ap-south-1.amazonaws.com",
            "i.imgur.com",
        ],
    },
};

module.exports = nextConfig;
