import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { HttpStatusCodes } from "../utils/http-status-codes";

export const serviceFilterEpisodes = async (url: string | undefined): Promise<PodcastTransferModel> => {
    let podcastName = url?.split("?p=")[1] ?? "";
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast(podcastName);

    responseFormat.body = data;
    if (data.length !== 0) {
        responseFormat.statusCode = HttpStatusCodes.OK;
    } else {
        responseFormat.statusCode = HttpStatusCodes.NO_CONTENT;
    }

    return responseFormat;
}