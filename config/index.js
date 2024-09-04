const dev = process.env.NODE_ENV !== "production"
const url = process.env.SITEURL


export const server = url ? url : dev ? 'http://localhost:3000': 'https://gela.com'