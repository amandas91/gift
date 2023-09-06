export const GifItem = ({ title, url, id}) =>{
    return (
        <div className="card">
            <p>{title}</p>
            <img  src={url} />
        </div>
    )
}