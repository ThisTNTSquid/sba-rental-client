import axios from 'axios'
import config from '../config/config'

export default{
  query: async function (sql) {
    const result = await axios(config.api.hostname+encodeURIComponent(sql));
    console.log(result.data)
    return result.data
  }    
}