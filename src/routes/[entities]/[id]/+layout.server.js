import { entityConfig, appConfig } from '$lib/constants.js';


export async function load({ fetch, params, url }) {

    let fetch_data_url = `${appConfig.base_url}${params.entities.slice(0, -1)}/${params.id}`
    const res = await fetch(fetch_data_url);
	const entityPayload = await res.json();
    // console.log(params)
    // console.log(url)
    console.log(entityPayload)
    return { fetch_data_url, entityPayload }
}
