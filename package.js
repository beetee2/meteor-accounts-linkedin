Package.describe({
  name: 'beetee2:accounts-linkedin',
  summary: "Accounts service for LinkedIn accounts",
  version: "1.1.2",
  git: "https://github.com/beetee2/meteor-accounts-linkedin.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4')

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('beetee2:linkedin@1.1.2', ['client', 'server']);

  api.addFiles(['linkedin_login_button.css'], 'client');
  api.addFiles('linkedin_common.js', ['client', 'server']);
  api.addFiles('linkedin_server.js', 'server');
  api.addFiles('linkedin_client.js', 'client');
});


