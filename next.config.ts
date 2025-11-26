import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: {
    // Next/Image optimization requires a server; disable for static hosting
    unoptimized: true,
  },
  // Compute basePath/assetPrefix for project pages when building on GitHub Actions
  ...(function () {
    const isGithubPages = process.env.GITHUB_PAGES === "true";
    const repo = process.env.GITHUB_REPOSITORY || "";
    const repoName = repo.split("/")[1] || "";
    const isUserSite = repoName.toLowerCase().endsWith(".github.io");
    const computedBasePath =
      isGithubPages && repoName && !isUserSite ? `/${repoName}` : "";
    return computedBasePath
      ? {
          basePath: computedBasePath,
          assetPrefix: computedBasePath,
        }
      : {};
  })(),
};

export default nextConfig;
