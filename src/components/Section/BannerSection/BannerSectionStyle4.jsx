import React from 'react';
import parser from 'html-react-parser';

export default function BannerSectionStyle4({
  bgUrl,
  title,
  subTitle,
  center,
}) {
  return (
    <div className="container">
      <div
        className={`cs_banner cs_style_4 cs_bg_filed overflow-hidden ${
          center ? 'text-center' : ''
        }`}
        style={{
          backgroundImage: `url(${bgUrl})`,
          position: 'relative',
          overflow: 'hidden', // Apply overflow hidden
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <h2 className="cs_banner_title cs_white_color cs_fs_72" style={{ zIndex: 1 }}>
          {parser(title)}
        </h2>
        <p className="cs_banner_subtitle cs_white_color cs_fs_20 m-0" style={{ zIndex: 1 }}>
          {parser(subTitle)}
        </p>
      </div>
    </div>
  );
}

