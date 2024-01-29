import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b976cb03a9554f1984067533bb96b74c'
    }
})