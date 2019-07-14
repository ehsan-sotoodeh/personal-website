import C from '../store/constants'

import {} from 'dotenv/config'
const axios = require('axios');
axios.defaults.withCredentials = true
require('dotenv').config()


class BlogService  {
    constructor(){
        this.apiKey = process.env.REACT_APP_BLOGGER_API_KEY;
        this.blogID = process.env.REACT_APP_BLOG_ID;
        this.serverAddress = process.env.REACT_APP_SERVER_ADDRESS;
    }
     
    async fetchAllPosts(maxResults) {

        try {
            const url = `${this.serverAddress}blogs/${this.blogID}/posts/?maxResults=${maxResults}&key=${this.apiKey}`;
            
            let result = await axios.get(url);
            if(result.status !== 200){
                throw Error(result.status)
            }

            let posts = result.data.items
            return posts;
        } catch (error) {
            throw new Error(error.message)
        } 
    }

    async fetchPostById(postId) {
        try {
            const url = `${this.serverAddress}blogs/${this.blogID}/posts/${postId}/?key=${this.apiKey}`;

            let result = await axios.get(url);
            console.log(result)
            if(result.status !== 200){
                throw Error(result.status)
            }

            let post = result.data
            return post;

        } catch (error) {
            console.log(error)
        }

    }
    async fetchPageById(pageId) {
        try {
            const url = `${this.serverAddress}blogs/${this.blogID}/pages/${pageId}/?key=${this.apiKey}`;

            let result = await axios.get(url);
            if(result.status !== 200){
                throw Error(result.status)
            }

            let post = result.data
            return post;

        } catch (error) {
            console.log(error)
        }

    }


}

const _BlogService = new BlogService();
export { _BlogService as BlogService };