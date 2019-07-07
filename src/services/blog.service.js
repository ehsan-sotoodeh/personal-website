import C from '../store/constants'

import {} from 'dotenv/config'
const axios = require('axios');
axios.defaults.withCredentials = true
require('dotenv').config()


class BlogService  {
    constructor(){
        console.log( process.env)
        this.apiKey = process.env.REACT_APP_BLOGGER_API_KEY;
        this.blogID = process.env.REACT_APP_BLOG_ID;
        this.serverAddress = process.env.REACT_APP_SERVER_ADDRESS;
    }
     
    async fetchAllPosts(maxResults) {
        console.log( process.env.BLOGGER_API_KEY)

        try {
            console.log(maxResults)
            const url = `${this.serverAddress}blogs/${this.blogID}/posts/?key=${this.apiKey}`;
            console.log(url)
            
            let posts = await axios.get(url);
            console.log(posts)


            posts = posts.json();
            return posts;
        } catch (error) {
            throw new Error(error.message)
        } 
    }

    async fetchOneSnippetById(snippetId) {
        try {
            const url = `${this.serverURL}/snippets/id/${snippetId}`;

            let snippet = await axios.get(url);
            return snippet.data
        } catch (error) {
            console.log(error)
        }

    }


}

const urlfy = obj => Object
    .keys(obj)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
    .join('&');


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

const _BlogService = new BlogService();
export { _BlogService as BlogService };