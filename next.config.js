const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */

module.exports = async (phase) => {
  /** @type {import("next").NextConfig} */
  let nextConfig = {}

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig = {
      
    }
  } else {

    nextConfig = {
      output: 'export',
      basePath: "/fuji",
      assetPrefix: "/fuji/",
      images: {
        unoptimized: true,
      },
    }
  }

  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withSerwist = (await import("@serwist/next")).default({
      swSrc: "app/app-worker.js",
      swDest: "public/sw.js",
      reloadOnOnline: true,
    });
    return withSerwist(nextConfig);
  }
 
  return nextConfig;
};