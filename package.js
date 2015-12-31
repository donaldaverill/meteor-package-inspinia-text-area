Package.describe({
  name: 'fourquet:inspinia-text-area',
  version: '0.0.1',
  summary: 'Blaze textarea component to use with the Inspinia Bootstrap Admin Theme',
  git: 'https://github.com/fourquet/meteor-package-inspinia-text-area',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
  'templating',
];

const clientFiles = [
  'textArea.html',
  'textArea.js',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply(packages);
  api.addFiles(clientFiles, 'client');
});
