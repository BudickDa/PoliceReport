Package.describe({
    name: 'budickda:tentacula',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');
    api.use('ecmascript');
    api.use('underscore');

    api.addFiles('tentacula.js', 'server');

    api.addFiles('scrapper/get_html.js', 'server');
    api.addFiles('scrapper/scrap_html.js', 'server');

    api.addFiles('word2vec/helper.js', 'server');
    api.addFiles('word2vec/model.js', 'server');
    api.addFiles('word2vec/wordVector.js', 'server');
    api.addFiles('word2vec/word2vec.js', 'server');


    api.export('Tentacula', 'server');
    api.export('W2V', 'server');
});


Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('tentacula');
    api.addFiles('tentacula-tests.js');
});


Npm.depends({
    'snowball-german': '1.0.0',
    'vectors': '0.1.0',
    'cheerio': '0.19.0'
});

