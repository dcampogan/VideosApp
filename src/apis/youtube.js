import axios from 'axios';

const KEY = 'AIzaSyCqZu73AyDcdEAUy_o8XwqW9LRzuljmD8A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});