export const appConfig = {
    title: "PFP-Frontend",
    title_short: "PFP",
    base_url: "https://pfp-api.acdh-dev.oeaw.ac.at/",
    code_repo_url: "https://github.com/csae8092/pfp-frontend"
}

export const entityConfig = {
    persons: {
        base_url: `${appConfig.base_url}persons`,
        label: "Persons",
        link: "/persons",
        entity: true
    },
    places: {
        base_url: `${appConfig.base_url}places`,
        label: "Places",
        link: "/places",
        entity: true
    },
    groups: {
        base_url: `${appConfig.base_url}groups`,
        label: "Groups",
        link: "/groups",
        entity: true
    },
    works: {
        base_url: `${appConfig.base_url}works`,
        label: "Works",
        link: "/works",
        entity: true
    },
    datasets: {
        base_url: `${appConfig.base_url}datasets`,
        label: "Datasets",
        link: "/datasets",
        entity: false
    },
}