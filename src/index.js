import * as $ from 'jquery'
import Post from './models/Post.js'
import './styles/style.css'
import json from './assets/json'
import WebpackLogo from './assets/webpack'
import './babel'

const post = new Post('Webpack post title', WebpackLogo)

$('pre').html(post.toString())

console.log(json.toString())