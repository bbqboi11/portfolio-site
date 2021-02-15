import * as React from 'react';

import { Header } from '../components/header';
import { Projects } from '../components/projects';

import './index.scss';

export default () => {
  return (
    <main className="main">
      <Header />
      <div className="content">
        <Projects />
      </div>
    </main>
  );
};
