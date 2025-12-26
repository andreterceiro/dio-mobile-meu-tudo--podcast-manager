import Podcast from "../models/Podcast";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCodes } from "../utils/http-status-codes";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
    const data = await repositoryPodcast();
    let responseFormat: FilterPodcastModel = {
        statusCode: data.length === 0 ? HttpStatusCodes.NO_CONTENT : HttpStatusCodes.OK,
        body: data
    }

    return responseFormat;
}