import React from 'react';

import BangladeshMap from './BangladeshMap/BangladeshMap';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';

import style from './mapSection.module.scss';

const {
  mapSection,
  contentContainer,
  mapContainer,
  content,
  search,
  imageContainer,
  healthCenterName,
  locationContact,
  address,
  contact,
  listOfHospital,
  heading,
  divisionName,
  icon
} = style;

const MapSection = () => {
  return (
    <div className={mapSection}>
      <h2 className={heading}>Our Health Centers</h2>
      <div className={contentContainer}>
        <div className={mapContainer}>
          <BangladeshMap/>
        </div>
        <div className={content}>
          <h4 className={divisionName}>Dhaka Division</h4>
          <input className={search} type="text" placeholder='type your location..'/>
          <div className={imageContainer}>
            <h2>Image</h2>
          </div>
          <h3 className={healthCenterName}>Rampur Health Center</h3>
          <div className={locationContact}>
            <div className={address}>
              <FaLocationDot className={icon}/>
              <p>Dhankhali College Bazar, Kolapara, Patuakhali, Patuakhali</p>
            </div>
            <div className={contact}>
              <FaPhone className={icon}/>
              <p>01701 693 470</p>
            </div>
          </div>
          <div className={listOfHospital}>
            <p>Kalia Health Center, Tangail, Sakhipur</p>
            <p>Rampur Health Center, Tangail, Kalihati</p>
            <p>Kalibari Health Center, Mymensingh, Muktagachha</p>
            <p>Kaliyaish Health Center, Chattogram, Satkania</p>
            <p>Dhankhali Health Center, Patuakhali, Kala Para</p>
            <p>Kalibari Health Center, Mymensingh, Muktagachha</p>
            <p>Kaliyaish Health Center, Chattogram, Satkania</p>
            <p>Dhankhali Health Center, Patuakhali, Kala Para</p>
            <p>Kalibari Health Center, Mymensingh, Muktagachha</p>
            <p>Kaliyaish Health Center, Chattogram, Satkania</p>
            <p>Dhankhali Health Center, Patuakhali, Kala Para</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
