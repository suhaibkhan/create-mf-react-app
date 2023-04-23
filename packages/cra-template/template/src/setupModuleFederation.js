const deps = require('../package.json').dependencies;

module.exports = {
  name: 'mfApp',
  library: { type: 'var', name: 'mfApp' },
  filename: 'remoteEntry.js',
  // import should use <remoteName>/MFRoot
  exposes: { './MFRoot': './src/MFRoot.js' },
  shared: {
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
  },
  // remotes: {
  //   mfApp2: 'mfApp2@http://localhost:3001/remoteEntry.js',
  // },
};
