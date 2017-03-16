# Issue using Styleguidist with `externals`
_Tested in macOS Sierra 10.12.3 / Node v7.6.0 / NPM v4.1.2 / rsg 5.0.0-rc.1._

VHS is an internal video player used by The New York Times.

The library is intended for use either as a global script or an AMD module. It also depends on VHS.

Since Styleguidist cannot be configured to build an AMD module (nor would I want it to do that), we've had issues previewing components that use VHS.

In the past (circa rsg `5.0.0-beta.13`), I've successfully worked around this by configuring Styleguidist to use:

1. A custom HTML template that loads jQuery and VHS via script tags
2. A custom Webpack config that specifies `jquery` and `vhs` as externals

Included in this example repository is a component, `VHSDependentComponent`, which simply imports `vhs`; it's sufficient to demonstrate the problem.

You'll see the following error output when running `npm run start`:  ```bash > styleguidist server  Style guide server started at: http://localhost:6060  Failed to compile.  Error in ./lib/components/VHSDependentComponent/VHSDependentComponent.jsx Module not found: Can't resolve 'vhs' in '/Users/206837/Sites/Tools/styleguidist-5.0.0-rc.1_externals-example/lib/components/VHSDependentComponent'   @ multi ./~/react-styleguidist/lib/index ./~/react-dev-utils/webpackHotDevClient.js ```