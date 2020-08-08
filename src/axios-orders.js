import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-project-using-react.firebaseio.com/'
});

export default instance;