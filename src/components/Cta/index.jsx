import React from 'react';
import Button from '../Button';

export default function Cta({ title, subTitle, bgUrl, btnUrl, btnText }) {
  return (
    <div className="container">
      <div
        className="cs_cta cs_style_1 cs_bg_filed cs_radius_20"
        style={{
          backgroundImage: `url(${bgUrl})`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity as needed
          }}
        ></div>
        <h2 className="cs_cta_title cs_fs_72" style={{ color: 'white', zIndex: 20 }}>{title}</h2>
        <p className="cs_cta_subtitle cs_heading_color" style={{ color: 'white', zIndex: 20 }}>{subTitle}</p>
        <Button btnUrl={btnUrl} btnText={btnText} />
      </div>
    </div>
  );
}


