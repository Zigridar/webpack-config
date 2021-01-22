import Post from './Post'
import './styles/style.css'
import json from '../assets/json'

const post = new Post('Webpack post title')

console.log(post.toString())
console.log(json)