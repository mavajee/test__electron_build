const path = require("path")
const glob = require("glob")

/**
 * @returns {string[]}
 */
function getAssets() {
  const repositoryRootPath = path.resolve(__dirname, "..")

  const assetsPath = path.join(repositoryRootPath, "dist")
  const assetsPattern = "/*(*.exe|*.zip|*.nupkg|*.tar.gz|*.rpm|*.deb|RELEASES*|atom-api.json)"
  const assets = glob.sync(assetsPattern, { root: assetsPath, nodir: true })

  return assets
}

module.exports = getAssets
