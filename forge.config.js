module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mickaelo',
          name: 'electrony'
        },
        prerelease: false,
        draft: true,
        authToken: "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"
      }
    }
  ]
};
