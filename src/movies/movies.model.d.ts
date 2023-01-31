export interface movieDTO {
    id: number;
    title: string;
    poster: string;
}

export interface landingPage {
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
}