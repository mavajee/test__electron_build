## Are welcome, triple build is here

This is simple example how to use CI to build electron app for all target OS, and publish this to github [releases](https://github.com/mavajee/test__electron_build/releases).

App will build, when we push a new tag.

travis can build only for os-x and linux systems but for windows need use appveyor.

## Require

First you need setup Environment Variables for GITHUB_TOKEN. You can get token from github account settings.

<!-- both travis and appveyor have simple ways to deploy app but make load builded files to one release from two different servies? -->

<!-- if's for me some links -->
<!-- https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables -->
<!-- https://developer.github.com/v3/repos/releases/ -->
<!-- https://github.com/atom/atom/blob/0e9f4658889bd386bbfe658858c6864c7cafb7c4/script/package.json" -->