export const CtaBusConfig = {
    ApiHost: 'https://xorigin.azurewebsites.net/ctabus/',
    ApiKeyName: 'ctabusapikey',
    StopsName: 'ctabusstops',
    CountdownInterval: 5000,
}

export const CtaTrainConfig = {
    ApiHost: 'https://xorigin.azurewebsites.net/ctatrain/',
    ApiKeyName: 'ctatrainapikey',
    StationsName: 'ctatrainstations',
    CountdownInterval: 5000,
}

export const TransitConfig = {
    CtaTrain: CtaTrainConfig,
    CtaBus: CtaBusConfig,
    UpdateInterval: 60000,
}

export const DarkSkyConfig = {
    ApiHost: 'https://xorigin.azurewebsites.net/darksky/',
    ApiKeyName: 'darkskyapikey',
    LatLongName: 'latlong',
    UpdateInterval: 60000,
}

export const EventsConfig = {
    ApiHost: 'https://www.googleapis.com/',
    ApiKeyName: 'googleapikey',
    IdsName: 'googlecalendarids',
    UpdateInterval: 60000,
}

export const MessageConfig = {
    GitHub: {
        ApiHost: 'https://api.github.com/',
        Repo: 'bmiddha/simple-js-clock',
        Features: ['contributors', 'issues', 'pulls'],
    },
    Slack: {
        ApiKeyName: 'slackbottoken',
        ApiHost: 'https://slack.com/api/',
    }
}

export const ClockConfig = {
    UpdateInterval: 1000,
}