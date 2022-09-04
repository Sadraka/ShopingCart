import axios from 'axios';

const Api = async (id) => {
    const url = `https://fakestoreapi.com/products${id}`
    const producs = await axios.get(url);
    // console.log(produc.data)
    console.log("salam")
    return producs.data;

    
};
export default Api