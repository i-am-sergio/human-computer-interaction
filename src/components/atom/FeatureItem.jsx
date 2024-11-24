import React from "react";
import { AnimationComponent } from "./AnimationComponent";
import { Paragraph } from "./Paragraph";

export const FeatureItem = ({ feature, i }) => {
  const featureItem = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <AnimationComponent
      variants={featureItem}
      className="flex flex-col border border-accent feature-item mx-4 rounded-xl"
    >
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-accent">
        <h4 className="text-accent font-body font-medium text-lg">
          {feature?.title}
        </h4>
        <div>{feature.logo}</div>
      </div>
      <div className="p-6 pb-10">
        <Paragraph fontSize="text-sm" color="text-black-300" style="leading-6">
          {feature?.content}
        </Paragraph>
      </div>
    </AnimationComponent>
  );
};
