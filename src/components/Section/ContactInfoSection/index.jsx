import React from 'react';
import IconBoxStyle11 from '../../IconBox/IconBoxStyle11';
import Spacing from '../../Spacing';

export default function ContactInfoSection({ sectionTitle }) {
  // Updated latitude and longitude
  const latitude = 38.96523023256075;
  const longitude = -76.84782443179131;

  return (
    <div className="container">
      <h2 className="cs_fs_72 mb-0">{sectionTitle}</h2>
      <Spacing md="70" lg="50" />
      <div className="row g-4 g-xl-3 g-xxl-5">
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Phone"
            subTitle="
            +1(240)-764-8357"
            iconSrc="/images/contact/icon_1.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Email"
            subTitle="Info@creeksidecorp.com"
            iconSrc="/images/contact/icon_2.svg"
          />
        </div>
        <div className="col-xl-4">
          <IconBoxStyle11
            title="Location"
            subTitle="9332 Annapolis Rd, Ste 216, Lanham, MD 20706"
            iconSrc="/images/contact/icon_3.svg"
          />
        </div>
      </div>
      <Spacing md="35" />
      {/* Start Google Map */}
      <div className="cs_map">
        <iframe
          id="map"
          title="Google Map"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd084ba5b3fb%3A0x8767ec06123811f7!2s9332%20Annapolis%20Rd%2C%20Ste%20216%2C%20Lanham%2C%20MD%2020706!5e0!3m2!1sen!2sus!4v1646252928961!5m2!1sen!2sus`}
          allowFullScreen
        />
      </div>
      {/* End Google Map */}
    </div>
  );
}

