import { getRequest } from './ApiService';
import env from '../environment/env.json';

async function getAnime(query='', limit = 20, offset = 0, fields = 'id, title, main_picture') {

    if(query == null || query.length < 3)
        return null

    let params = [
        'q='+query,
        'limit='+limit
    ];
    
    return getRequest(params, env.apiUrl+env.getAnime);
}

async function getAnimeDetails(id=null, fields = 'id,title,main_picture,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,media_type,status,num_episodes,start_season,rating,studios,statistics') {

    if(id == null)
        return null

    let params = [
        'fields='+fields
    ];
    
    return getRequest(params, env.apiUrl+id,env.getAnimeDetails);
}

export { getAnime, getAnimeDetails };