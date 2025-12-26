import { repositoryPosdcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (url: string | undefined) => {
    let podcastName = url?.split("?p=")[1] ?? "";

    const data = await repositoryPosdcast(podcastName);
    return data;
}