
const getEnv = function () {
    switch (process.env.BUILD_ENV) {
        case 'dev':
            return ".env.development"
        case 'prod:test':
            return ".env.production.test"
        case 'prod:pre':
            return ".env.production.pre"
        case 'prod:uat':
            return ".env.production.uat"
        case 'pro':
            return ".env.production"
        default:
            return ''

    }

}
module.exports.getEnv = getEnv