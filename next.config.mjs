import createMDX from '@next/mdx'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // String form lets Next handle dynamic imports of ESM-only plugins.
    rehypePlugins: [['rehype-slug', {}]],
  },
})

const projectRoot = dirname(fileURLToPath(import.meta.url))
const basePath = ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  basePath,
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  env: {
    // Exposed so components can prefix asset paths (e.g. <Image src>)
    // since Next does not auto-apply basePath to string src values.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: projectRoot,
  },
}

export default withMDX(nextConfig)
