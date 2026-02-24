export const appConfig = {
    title: "PFP-Frontend",
    title_short: "PFP",
    base_url: "http://127.0.0.1:8000/",
    code_repo_url: "https://github.com/csae8092/pfp-frontend-shadcn"
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


export const cidoc_mapping = {
    "http://www.cidoc-crm.org/cidoc-crm/P98_brought_into_life": "Birth",
    "http://www.cidoc-crm.org/cidoc-crm/P100_was_death_of": "Death",
    "http://www.cidoc-crm.org/cidoc-crm/P143i_was_joined_by": "Member"
}