const getChangelogByVersion = require('./_get-changelog')

module.exports = {
  /**
   * @returns {string}
   */
  get appVersion() {
    return process.env.TRAVIS_TAG || process.env.APPVEYOR_REPO_TAG_NAME
  },

  /**
   * markdown string
   * @return {string}
   */
  get notes() {
    return getChangelogByVersion()
  }
}
