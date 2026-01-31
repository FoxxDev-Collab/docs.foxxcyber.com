### Added Features

- warn about packages from EOL distros [[#3171](https://github.com/anchore/grype/pull/3171) @willmurphyscode]
- make it configurable what grype assumes when incoming package to grype is missing dpkg/RPM epoch [[#2964](https://github.com/anchore/grype/issues/2964) [#2976](https://github.com/anchore/grype/pull/2976) @willmurphyscode]

### Bug Fixes

- RHEL EUS: `--only-fixed` should filter out matches are not fixed in the current EUS version [[#2847](https://github.com/anchore/grype/issues/2847) [#3181](https://github.com/anchore/grype/pull/3181) @willmurphyscode]

### Additional Changes

- support scientific linux [[#3175](https://github.com/anchore/grype/pull/3175) @westonsteimel]

**[(Full Changelog)](https://github.com/anchore/grype/compare/v0.105.0...v0.106.0)**
