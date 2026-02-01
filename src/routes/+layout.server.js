// @ts-nocheck
import { appConfig, entityConfig } from '$lib/constants.js';

let base_url = appConfig.base_url;
let errors = [];
let datasets = []

export async function load({ fetch, params }) {
	let stats = [
		{
			label: 'Persons',
			link: '/persons',
			amount: 2345432,
			icon: 'persons',
			description: "This class comprises real persons. "
		},
		{
			label: 'Places',
			link: '/places',
			amount: 251001,
			icon: 'places',
			description: "Places are physical locations that are associated with one or more resources in the PFP dataset."
		},
		{
			label: 'Groups',
			link: '/groups',
			amount: 1653147,
			icon: 'groups',
			description: "Groups are collections of persons or places that share common characteristics or are associated in some way."
		},
		{
			label: 'Works',
			link: '/works',
			amount: 1653147,
			icon: 'works',
			description: "Works are creative or intellectual productions associated with persons or groups."
		},
		{
			label: 'Datasets',
			link: '/datasets',
			amount: 10,
			icon: 'datasets',
			description: "Data providers."
		}
	];
	try {
		const res = await fetch(`${base_url}datasets`);
		if (!res.ok) {
			errors.push("Server Issue")
		}
		datasets = await res.json();
	} catch (error) {
		console.error("Fetch failed:", error);
		errors.push(error)
	}
	console.log(errors)
	return { datasets: datasets, count: Object.keys(datasets).length, stats: stats, entityConfig:entityConfig, errors: errors };
}
