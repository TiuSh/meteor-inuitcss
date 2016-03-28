Package.describe({
  name: 'tiush:inuitcss',
  version: '1.0.0',
  summary: 'inuitcss is a powerful, Sass-based, BEM, OOCSS framework designed with scalability and performance in mind.',
  git: 'https://github.com/TiuSh/meteor-inuitcss.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('fourseven:scss@3.4.1');

  // SETTINGS
  api.addFiles('inuit-defaults/_settings.defaults.scss', 'client', {isImport: true});
  api.addFiles('inuit-responsive-settings/_settings.responsive.scss', 'client', {isImport: true});

  // TOOLS
  api.addFiles('inuit-functions/_tools.functions.scss', 'client', {isImport: true});
  api.addFiles('inuit-mixins/_tools.mixins.scss', 'client', {isImport: true});
  api.addFiles('inuit-responsive-tools/_tools.responsive.scss', 'client', {isImport: true});
  api.addFiles('inuit-tools-widths/_tools.widths.scss', 'client', {isImport: true});

  // GENERIC
  api.addFiles('inuit-box-sizing/_generic.box-sizing.scss', 'client', {isImport: true});
  api.addFiles('inuit-normalize/_generic.normalize.scss', 'client', {isImport: true});
  api.addFiles('inuit-reset/_generic.reset.scss', 'client', {isImport: true});
  api.addFiles('inuit-shared/_generic.shared.scss', 'client', {isImport: true});

  // BASE
  api.addFiles('inuit-page/_base.page.scss', 'client', {isImport: true});
  api.addFiles('inuit-headings/_base.headings.scss', 'client', {isImport: true});
  api.addFiles('inuit-images/_base.images.scss', 'client', {isImport: true});
  api.addFiles('inuit-lists/_base.lists.scss', 'client', {isImport: true});
  api.addFiles('inuit-paragraphs/_base.paragraphs.scss', 'client', {isImport: true});

  // OBJECTS
  api.addFiles('inuit-block/_objects.block.scss', 'client', {isImport: true});
  api.addFiles('inuit-box/_objects.box.scss', 'client', {isImport: true});
  api.addFiles('inuit-buttons/_objects.buttons.scss', 'client', {isImport: true});
  api.addFiles('inuit-flag/_objects.flag.scss', 'client', {isImport: true});
  api.addFiles('inuit-layout/_objects.layout.scss', 'client', {isImport: true});
  api.addFiles('inuit-list-bare/_objects.list-bare.scss', 'client', {isImport: true});
  api.addFiles('inuit-list-block/_objects.list-block.scss', 'client', {isImport: true});
  api.addFiles('inuit-list-inline/_objects.list-inline.scss', 'client', {isImport: true});
  api.addFiles('inuit-list-ui/_objects.list-ui.scss', 'client', {isImport: true});
  api.addFiles('inuit-media/_objects.media.scss', 'client', {isImport: true});
  api.addFiles('inuit-pack/_objects.pack.scss', 'client', {isImport: true});
  api.addFiles('inuit-tables/_objects.tables.scss', 'client', {isImport: true});
  api.addFiles('inuit-tabs/_objects.tabs.scss', 'client', {isImport: true});

  // TRUMPS
  api.addFiles('inuit-clearfix/_trumps.clearfix.scss', 'client', {isImport: true});
  api.addFiles('inuit-headings-trumps/_trumps.headings.scss', 'client', {isImport: true});
  api.addFiles('inuit-print/_trumps.print.scss', 'client', {isImport: true});
  api.addFiles('inuit-spacing/_trumps.spacing.scss', 'client', {isImport: true});
  api.addFiles('inuit-spacing-responsive/_trumps.spacing-responsive.scss', 'client', {isImport: true});
  api.addFiles('inuit-widths/_trumps.widths.scss', 'client', {isImport: true});
  api.addFiles('inuit-widths-responsive/_trumps.widths-responsive.scss', 'client', {isImport: true});

});
