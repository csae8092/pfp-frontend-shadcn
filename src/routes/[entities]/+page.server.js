import { entityConfig } from '$lib/constants.js';


export async function load({ fetch, params, url }) {
    let query_string = new URLSearchParams(Object.fromEntries(url.searchParams));
    if (!query_string.has('size')) {
        query_string.set('size', '15');
    }
    // @ts-ignore
    const { base_url, label, link, entity } = entityConfig[params.entities];
    const fetch_data_url = `${base_url}${query_string && query_string.toString() ? '?' + query_string.toString() : ''}`;
    const res = await fetch(fetch_data_url);
	const payload = await res.json();
    payload["next_page"] = false;
    if (payload.page < payload.pages) {
        let nextParams = new URLSearchParams(Object.fromEntries(url.searchParams));
        nextParams.delete('page');
        nextParams.set('page', `${payload.page + 1}`);
        payload["next_page"] = `${url.origin}${url.pathname}?${nextParams.toString()}`;
    }
    if (payload.page > 1) {
        let prevParams = new URLSearchParams(Object.fromEntries(url.searchParams));
        prevParams.delete('page');
        prevParams.set('page', `${payload.page - 1}`);
        payload["previous_page"] = `${url.origin}${url.pathname}?${prevParams.toString()}`;
    }
    payload["fetch_data_url"] = fetch_data_url
    // console.log(payload)
	return { label, payload, entity  };
}
