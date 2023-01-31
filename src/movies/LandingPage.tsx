import { useState, useEffect } from "react";
import { landingPage } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {

    const [movies, setMovies] = useState<landingPage>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: "True Detective",
                        poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F73%2F61%2F58%2F7361583898d2e42805a913c10bfa39fb.jpg&f=1&nofb=1&ipt=9521834bd6fa2f63fec0826b8323cbb45d6e551771349778c6325f4c059d5b36&ipo=images"
                    },
                    {
                        id: 2,
                        title: "Breaking Bad",
                        poster: "https://upload.wikimedia.org/wikipedia/en/6/61/BreakingBadS1DVD.jpg"
                    }
                ],
                upcomingReleases: [
                    {
                        id: 1,
                        title: "Severance",
                        poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F5b97122b0a281b7733339a96%2F6250a9744329661120b3301f_severance-serie-Apple-TV-www.culturageek.com_.ar_.jpg&f=1&nofb=1&ipt=a25a654335ef1cc85df3e949f879faf6568b84fdb40091ac89d951708d74696b&ipo=images"
                    }
                ]
            })
        }, 1000);

        return () => clearTimeout(timerId);
    });

    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}