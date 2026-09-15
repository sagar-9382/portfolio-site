import React from "react";

export interface SectionHeadingProps {
  number: string;
  label: string;
  title: React.ReactNode;
  subTitle?: string;
}

export const SectionHeading = ({
  label,
  number,
  title,
  subTitle,
}: SectionHeadingProps): React.JSX.Element => {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">
        <span>{number}</span> {label}
      </p>
      <div>
        <h2>{title}</h2>
        {subTitle && <p className="section-subtitle">{subTitle}</p>}
      </div>
    </div>
  );
};
