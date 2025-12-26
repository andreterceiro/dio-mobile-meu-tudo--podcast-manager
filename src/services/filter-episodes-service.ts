import { repositoryPosdcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPosdcast(podcastName);
    return data;
}