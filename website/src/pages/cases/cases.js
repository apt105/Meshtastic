import React from 'react';

// import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import clsx from 'clsx';
import styles from './styles.module.css';
import boxes from './case-data.js';

function Showcases() {
  return (
    <Layout title="3D printed cases" description="The Meshtastic community has produced a number of designs for 3D printed and laser cut cases. Here are a selection of them.">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>3D printed cases</h1>
          <p>The Meshtastic community has produced a number of designs for 3D printed and laser cut cases. Here are a selection of them.</p>
        </div>
        <div className="row">
          {boxes.map((box) => (
            <div key={box.title} className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.showcaseUser)}>
                <div className="card__image">
                  <Image img={user.preview} alt={user.title} />
                </div>
                <div className="card__body">
                  <div className="avatar">
                    <div className="avatar__intro margin-left--none">
                      <h4 className="avatar__name">{user.title}</h4>
                      <small className="avatar__subtitle">
                        {boxes.description}
                      </small>
                    </div>
                  </div>
                </div>
                {(boxes.website || boxes.source) && (
                  <div className="card__footer">
                    <div className="button-group button-group--block">
                      {boxes.website && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={boxes.website}
                          target="_blank"
                          rel="noreferrer noopener">
                          {boxes.button}
                        </a>
                      )}
                      {user.source && (
                        <a
                          className="button button--small button--secondary button--block"
                          href={boxes.source}
                          target="_blank"
                          rel="noreferrer noopener">
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text--center margin-bottom--x1">
          <p>Further cases can be found on [Thingiverse](https://www.thingiverse.com/search?q=ttgo)</p>
        </div>
      </main>
    </Layout>
  );
}
 
export default Showcases;