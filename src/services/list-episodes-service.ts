import { repositoryPosdcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPosdcast();
    return data;
}