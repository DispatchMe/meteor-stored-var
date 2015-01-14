Package.describe({
  name: 'dispatch:stored-var',
  summary: 'A ReactiveVar cached on localStorage.',
  version: '1.0.0',
  git: 'https://github.com/DispatchMe/meteor-stored-var.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use(['ejson','localstorage', 'reactive-var'], 'web');

  api.addFiles('stored_var.js', 'web');

  api.export('StoredVar', 'web');
});
