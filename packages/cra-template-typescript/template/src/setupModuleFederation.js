const deps = require('../package.json').dependencies;

module.exports = {
  name: 'mfApp',
  library: { type: 'var', name: 'mfApp' },
  filename: 'remoteEntry.js',
  // import should use <remoteName>/MFRoot
  exposes: { './MFRoot': './src/MFRoot.tsx' },
  shared: {
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
  },
  // remotes: {
  //   app2: 'app2@http://localhost:3001/remoteEntry.js',
  // },
};
