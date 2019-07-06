import C from '../store/constants'
const axios = require('axios');
require('dotenv').config()
axios.defaults.withCredentials = true


class BlogService  {
    constructor(){
        this.apiKey = process.env.BLOGGER_API_KEY;
        this.blogID = process.env.BLOG_ID;
        this.serverAddress = process.env.SERVER_ADDRESS;
    }
    
    async fetchAllPosts(maxResults) {
        try {
            const url = `${this.SERVER_ADDRESS}blogs/${this.blogID}/posts/?key=${this.apiKey}`;

            let posts = await axios.get(url);


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