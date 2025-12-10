// next.config.mjs
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // you can add remark/rehype plugins here later if you want
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow MDX as pages / routes
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

export default withMDX(nextConfig)
