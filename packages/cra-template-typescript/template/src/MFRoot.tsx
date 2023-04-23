import React from 'react';
import styles from './MFRoot.module.css';

function MFRoot() {
  return (
    <div className={styles.container}>
      <h1>Micro Frontend</h1>
      <h2>App name: mfApp</h2>
    </div>
  );
}

export default MFRoot;