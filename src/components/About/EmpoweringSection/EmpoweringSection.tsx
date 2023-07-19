import React from 'react';
import Image from 'next/image';

import layoutTL from '@/assets/layout/grid-top-leaf.svg';

import style from './empoweringSection.module.scss';

const {
  empoweringSection, heading, parag, layoutLeft, img
} = style;

const EmpoweringSection = () => {
  return (
    <div className={empoweringSection}>
      <div className={layoutLeft}>
        <Image className={img} src={layoutTL} alt='layout'/>
      </div>
      <h2 className={heading}>
        Enabling and Empowering
        People to Elevate Themselves
        Out of Poverty Cycle Since 1996
      </h2>
      <p className={parag}>
        Currently, Grameen Kalyan is operating through 140 Community
        Based Health Centers located in 30 districts of Bangladesh.
        Each year Grameen Kalyan provides healthcare services to around
        700,000 (seven hundred thousand) people through its health
        centers and satellite programs. Besides that, additional 7
        million people in rural communities receive free basic healthcare
        check-up under Grameen Kalyan’s domiciliary and school health programs.
      </p>
      <p className={parag}>
        In the late nineties, a study revealed that without improvement
        in healthcare, the poor cannot stay out of poverty for long time.
        Microcredit could bring them out of poverty but to keep them out
        of poverty permanently, healthcare inequalities for the poor must
        be addressed. Observing the reality, Nobel Laureate Prof. Muhammad
        Yunus, Chairman of Grameen Kalyan undertook an experimental project
        named “Rural Health Program (RHP)” in 1993 through Grameen Trust.
        Upon its success, RHP was handed over to Grameen Kalyan (GK) in 1997
        immediately after its inception and since then it has been operating
        as a core program of Grameen Kalyan.
      </p>
      <p className={parag}>
        Over the time, GK has evolved a cost-effective, equitable,
        self-sustainable and extended rural health program for the indigent
        people by implementing the concept of community-based health centers,
        bringing the health outreach services to the doorsteps of the villagers
        and mobilizing beneficiaries through Micro Health Insurance (MHI) scheme.
        Along with providing primary healthcare directly, Kalyan has been
        promoting secondary & tertiary healthcare indirectly through functional
        referral services.
      </p>
    </div>
  );
};

export default EmpoweringSection;
