# Jekyll Blog Setup

`jekyll new .`

In project `root` - add `_includes`

In project `root` - add `_layouts`

In `Gemfile` - add `gem 'wdm', '>= 0.1.0' if Gem.win_platform?` if on Windows

In project `root` - run `bundle install`

In project `root` - run `bundle update`

In `_config.yml` - add `repository: username/repo`

In `_config.yml` - remove `theme`

In `_config.yml` - exclude `assets/node_modules`

In `_config.yml` - exclude `assets/bower_components`

In project `root` - add Github Pages domain file

In `assets` - run `npm install`

In `assets` - run `npm run clone`

In project `root` - run `bundle exec jekyll serve`
