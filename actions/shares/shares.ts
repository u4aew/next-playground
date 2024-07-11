import axios from 'axios';
export const getShares = async () =>  {
    const { data } = await axios.get('https://stock-exchange.fancy-app.site/api/shares');
    return { data }
}
