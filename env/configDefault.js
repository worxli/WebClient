const i18n = require('../po/lang');
const PACKAGE = require('../package');
const i18nLoader = require('../tasks/translationsLoader');

i18nLoader.set(i18n);

module.exports = {
    app_version: PACKAGE.version,
    api_version: '3',
    date_version: new Date().toGMTString(),
    year: new Date().getFullYear(),
    clientID: 'Web',
    clientSecret: '4957cc9a2e0a2a49d02475c9d013478d',
    articleLink: 'https://protonmail.com/blog/protonmail-v3-14-release-notes/',
    changelogPath: 'assets/changelog.tpl.html',
    versionPath: 'assets/version.json',
    translations: i18nLoader.get('list')
};
