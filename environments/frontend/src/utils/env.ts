const isDev = [
  'development',
  'localhost',
  'staging',
].includes(process.env.NODE_ENV!)

export default isDev
