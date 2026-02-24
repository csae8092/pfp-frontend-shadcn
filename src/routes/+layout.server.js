import { appConfig, entityConfig } from '$lib/constants.js';

let base_url = appConfig.base_url;

export async function load() {
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
	const datasets = [{ "label": "Akademieprotokolle: Sitzungsprotokolle der Österreichischen Akademie der Wissenschaften", "uri": "http://akademieprotokolle.acdh.oeaw.ac.at/" }, { "label": "Auden Musulin Papers: A Digital Edition of W. H. Auden's Letters to Stella Musulin", "uri": "http://amp.acdh.oeaw.ac.at/" }, { "label": "Die große Transformation: Staat und kommunaler öffentlicher Dienst in Wien 1918–1920", "uri": "http://gtrans.acdh.oeaw.ac.at/" }, { "label": "Hanslick Online", "uri": "http://hanslick.acdh.oeaw.ac.at/" }, { "label": "Die Korrespondenz der Kaiserin Eleonora Magdalena (1655–1720)", "uri": "http://kaiserin-eleonora.oeaw.ac.at/" }, { "label": "PIO", "uri": "http://oebl-pfp.acdh-ch-dev.oeaw.ac.at/" }, { "label": "Stenographische Protokolle der Plenarsitzungen des Österreichischen Nationalrats", "uri": "http://parlamint.acdh.oeaw.ac.at/" }, { "label": "Personen Moderne Basis", "uri": "http://pmb.acdh.oeaw.ac.at/" }, { "label": "Josef Staribacher: Tagebücher", "uri": "http://staribacher.acdh.oeaw.ac.at/" }, { "label": "Paul Tillich: Korrespondenz 1886–1933", "uri": "http://tillich.acdh.oeaw.ac.at/" }, { "label": "Das erste Wiener Merkantilprotokoll", "uri": "http://wmp1.acdh.oeaw.ac.at/" }]

	return { datasets: datasets, count: Object.keys(datasets).length, stats: stats, entityConfig: entityConfig };
}
