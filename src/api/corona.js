import axios from 'axios';

export default axios.create({
    baseURL: 'https://coronavirus-19-api.herokuapp.com'
});