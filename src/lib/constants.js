export const appConfig = {
    title: "PFP-Frontend",
    title_short: "PFP",
    base_url: "https://pfp-api.acdh-dev.oeaw.ac.at/",
    code_repo_url: "https://github.com/csae8092/pfp-frontend"
}

export const entityConfig = {
    persons: {
        base_url: `${appConfig.base_url}persons`,
        label: "Persons"
    },
    places: {
        base_url: `${appConfig.base_url}places`,
        label: "Places"
    },
    groups: {
        base_url: `${appConfig.base_url}groups`,
        label: "Groups"
    },
    works: {
        base_url: `${appConfig.base_url}works`,
        label: "Works"
    },
}