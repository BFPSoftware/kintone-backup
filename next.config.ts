import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        esmExternals: false // Disable ESM external resolution
    }
    /* config options here */
};

export default nextConfig;
