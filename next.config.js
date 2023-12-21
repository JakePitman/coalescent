/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "assets/models/",
          },
        },
      ],
    });
    config.module.output = "export";
    return config;
  },
};

module.exports = nextConfig;
