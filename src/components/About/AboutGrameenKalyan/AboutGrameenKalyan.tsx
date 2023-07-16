import React from 'react';

import style from './aboutGrameenKalyan.module.scss';

const { aboutGrameenKalyan, text } = style;

const AboutGrameenKalyan = () => {
  return (
    <div className={aboutGrameenKalyan}>
      <p className={text}>
        Grameen Kalyan Health Program has successfully initiated a set
        of grassroots level health infrastructure and health delivery
        system in which quality, sustainability and coverage of the
        underprivileged are the central preoccupations. Through its curative
        & preventive health services, Grameen Kalyan promotes accurate
        identification of common illness in outpatient settings, strengthens
        the counselling of healthcare during outreach activities, and performs
        timely referral services for acutely ill individuals.
      </p>
      <p className={text}>
        Grameen Kalyan continues to extend its support for the well-being
        of Grameen Bank (GB) borrowers, employees and their family members
        thru providing higher education loan & scholarship to the children
        of GB Borrowers and rendering medical, household loan and emergency
        financial assistance to the GB Employees.
      </p>
      <p className={text}>
        Grameen Kalyan has always been responsive to facilitate Food,
        Healthcare services and Relief assistance to the people affected
        by various Natural calamities and Disasters whenever the country is
        in need. Combating with Covid-19 Pandemic is also not an exception in this regard.
      </p>
      <p className={text}>
        Ever since the inception of Grameen Bank in 1976, Professor Muhammad
        Yunus was concern of the fact that, health improvement is an indispensable
        integral part of poverty alleviation. Consequently, Grameen Kalyan’s all
        efforts and initiatives were focused on solving Social Issues like rural
        healthcare, elevating livelihood, job creation, and other specific social causes.
      </p>
      <p className={text}>
        Since 2006, Grameen Kalyan has been actively involved in establishing &
        promoting Social Business entities operating diverse sectors like Agriculture,
        Nutrition, Healthcare, Value Chain, RMG, Finance, and Information Technology.
        Another massive success of Grameen Kalyan was creating around 6000 micro
        entrepreneurs in the rural economies, namely “Nobin Udyokta” - Young Entrepreneur
        Investment Program which was managed from 2014-2020.
      </p>
    </div>
  );
};

export default AboutGrameenKalyan;
