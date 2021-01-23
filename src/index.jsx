import * as $ from 'jquery'
import Post from './models/Post.js'
import './styles/style.css'
import json from './assets/json'
import WebpackLogo from './assets/webpack'
import './babel'
import {render} from 'react-dom'
import React from "react";

const post = new Post('Webpack post title', WebpackLogo)

const App = () => {
    return (
        <div>
            <div className="container">
                <h1>Webpack course</h1>
            </div>
            <hr/>

            <div className="logo"/>

            <hr/>

            <pre/>
        </div>
    )
}

render(<App />, document.getElementById('app'))

$('pre').html(post.toString())

console.log(json.toString())