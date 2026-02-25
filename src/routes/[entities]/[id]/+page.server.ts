import { entityConfig, appConfig } from '$lib/constants.js';

export async function load({ fetch, params, url }) {
    const fetch_data_url = `${appConfig.base_url}${params.entities.slice(0, -1)}/${params.id}`;
    const res = await fetch(fetch_data_url);
    const entityPayload = await res.json();

    const sources = Array.isArray(entityPayload?.sources) ? entityPayload.sources : [];
    const events: Record<string, unknown[]> = {};
    let labels = new Set<string>();
    const uris: string[] = [];

    for (const x of sources) {
        if (x?.label) labels.add(x.label);
        uris.push(x.subject)
        const sourceEvents = Array.isArray(x?.events) ? x.events : [];
        for (const y of sourceEvents) {
            const cidoc_class: string = y?.rdf_class?.class_uri ?? 'unknown';
            const firstObject = y?.objects?.[0];
            if (!firstObject) continue;

            const item = {
                ...firstObject,
                date: y?.date ?? null,
                source: typeof y?.event === 'string'
                    ? y.event.split('//').slice(-1)[0].split('.')[0]
                    : null
            };

            if (!events[cidoc_class]) {
                events[cidoc_class] = [];
            }
            events[cidoc_class].push(item);
        }
    }
    return { fetch_data_url, entityPayload, events, labels, uris };
}