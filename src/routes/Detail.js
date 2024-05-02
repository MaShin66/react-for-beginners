import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        setData(json.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            <h1>Detail</h1>
            <img src={data.large_cover_image} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.summary}</p>
        </div>
    )
}

export default Detail;