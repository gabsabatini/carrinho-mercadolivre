const fetchProducts = async (query:string) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    const data = await response.json();

    return data.results;
}

export default fetchProducts;