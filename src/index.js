import Post from './Post'
import './styles/style.css'
import json from './assets/json'
import WebpackLogo from './assets/webpack'

const post = new Post('Webpack post title', WebpackLogo)

console.log(post.toString())
console.log(json)