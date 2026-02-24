import { entityConfig, appConfig } from '$lib/constants.js';


export async function load({ fetch, params, url }) {

    let fetch_data_url = `${appConfig.base_url}${params.entities.slice(0, -1)}/${params.id}`
    const res = await fetch(fetch_data_url);
    const entityPayload = await res.json();
    
    const sources = entityPayload.sources;
    const events = /** @type {Record<string, any[]>} */ ({});
    for (const x of sources) {
        for (const y of x.events) {
            const item = y.objects[0];
            item.date = y.date;
            item.source = y.event.split("//").slice(-1)[0].split(".")[0];
            if (!events[y.type]) {
                events[y.type] = [];
            }
            events[y.type].push(item);
        }
    }
    console.log(events)
    // console.log(entityPayload.sources[0])
    return { fetch_data_url, entityPayload, events }
}
