import Podcast from "../models/Podcast";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCodes } from "../utils/http-status-codes";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    const data = await repositoryPodcast();
    let responseFormat: PodcastTransferModel = {
        statusCode: data.length === 0 ? HttpStatusCodes.NO_CONTENT : HttpStatusCodes.OK,
        body: data
    }

    return responseFormat;
}