import React from 'react';

import style from './missionVision.module.scss';

const {
  missionVision, missionContainer, title, desc, visionContainer
} = style;

const MissionVision = () => {
  return (
    <div className={missionVision}>
      <div className={visionContainer}>
        <h2 className={title}>vision</h2>
        <p className={desc}>
          An inclusive world-class primary healthcare ecosystem across Bangladesh.
        </p>
      </div>
      <div className={missionContainer}>
        <h2 className={title}>mission</h2>
        <p className={desc}>
          Delivering quality Primary Healthcare and minimize
          health inequalities and economic setbacks.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
