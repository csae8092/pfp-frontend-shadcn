import { appConfig } from '$lib/constants.js';

let base_url = appConfig.base_url;

export async function load({ fetch, params }) {
	let stats = [
		{
			label: 'Persons',
			link: '/persons',
			amount: 2345432,
			icon: 'user',
			description: "This class comprises real persons. "
		},
		{
			label: 'Places',
			link: '/places',
			amount: 251001,
			icon: 'map',
			description: "Places are physical locations that are associated with one or more resources in the PFP dataset."
		},
		{
			label: 'Groups',
			link: '/groups',
			amount: 1653147,
			icon: 'users',
			description: "Groups are collections of persons or places that share common characteristics or are associated in some way."
		},
		{
			label: 'Works',
			link: '/works',
			amount: 1653147,
			icon: 'book',
			description: "Works are creative or intellectual productions associated with persons or groups."
		},
		{
			label: 'Datasets',
			link: '/datasets',
			amount: 10,
			icon: 'dataset',
			description: "Data providers."
		}
	];
	const res = await fetch(`${base_url}datasets`);
	console.log(`${base_url}datasets`);
	const datasets = await res.json();

	return { datasets: datasets, count: Object.keys(datasets).length, stats: stats };
}
