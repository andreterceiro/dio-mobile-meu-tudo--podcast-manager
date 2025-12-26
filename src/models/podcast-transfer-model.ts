import Podcast from "./Podcast"

export interface PodcastTransferModel {
    statusCode: number,
    body: Podcast[]
}