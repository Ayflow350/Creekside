import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import Feature from '../../Feature';

export default function FeaturesSection({ sectionTitle, data }) {
  return (
    <div className="">
      <div className="" />
      <div className="container">
        <SectionHeading title={sectionTitle} center />
        <Spacing md="72" lg="50" />
        <div className="cs_random_features">
          {data?.map((item, index) => (
            <div className="cs_random_features_col" key={index}>
              <Feature {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
