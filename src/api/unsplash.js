import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID r2Pp_Ec2mMYShbe9WE20u3LzDmp388xBAc0XXSNmzAw'
    }
});