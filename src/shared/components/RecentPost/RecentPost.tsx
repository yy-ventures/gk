import React from 'react';

import RecentPostCard from './RecentPostCard/RecentPostCard';
import { Sliders } from '../Slider';
import style from './recentPost.module.scss';

const {
  recentPost,
  heading,
  divider,
  lineLeft,
  box,
  lineRight
} = style;

const RecentPost = () => {
  return (
    <div className={recentPost}>
      <h2 className={heading}>Recent Posts</h2>
      <div className={divider}>
        <div className={lineLeft}/>
        <div className={box}/>
        <div className={lineRight}/>
      </div>
      <Sliders
        infinite={true}
        slideShow={3}
        slideToShowMob={1}
        autoPlay={true}
        autoplaySpeed={3000}
      >
        <RecentPostCard/>
        <RecentPostCard/>
        <RecentPostCard/>
        <RecentPostCard/>
      </Sliders>
    </div>
  );
};

export default RecentPost;
