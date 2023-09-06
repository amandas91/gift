export const getGifts = async(category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=X7SsTIYD3Vow3lxqQGCjn3tmukbYdVsg&q=${category}&limit=10`;
        const resp = await fetch(url);
        const {data}  = await resp.json();

        //console.log(data);

        const gifts = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        //console.log(gifts);

    return gifts;
}