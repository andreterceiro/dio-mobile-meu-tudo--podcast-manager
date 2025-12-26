import Podcast from "./Podcast"

export interface FilterPodcastModel {
    statusCode: number,
    body: Podcast[]
}