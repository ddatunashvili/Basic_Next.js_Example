const dev = process.env.NODE_ENV !== "production"
const url = process.env.URL


export const server = dev ? 'http://localhost:3000': 'https://gela.com'

if (url){
    server = url
}