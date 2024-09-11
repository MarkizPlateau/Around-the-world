import * as React from 'react';
import { SVGProps } from 'react';

interface AmpersandIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  scale?: number;
  className?: string;
}

const AmpersandIcon: React.FC<AmpersandIconProps> = ({
  width = 66,
  height = 90,
  scale = 1,
  className,
  ...props
}) => {
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={scaledWidth}
      height={scaledHeight}
      viewBox="0 0 66 90"
      className={className}
      {...props}
    >
      <style>{'.text{font-family:"Lato",sans-serif;font-size:90px;font-weight:700}'}</style>
      <defs>
        <clipPath id="leftClip">
          <path d="M0 0h33v90H0z" />
        </clipPath>
        <clipPath id="rightClip">
          <path d="M33 0h33v90H33z" />
        </clipPath>
      </defs>
      <text
        x="50%"
        y="50%"
        className="text"
        textAnchor="middle"
        dominantBaseline="middle"
        clipPath="url(#leftClip)"
        style={{
          fill: '#DEA06D',
        }}
      >
        {'&'}
      </text>
      <text
        x="50%"
        y="50%"
        className="text"
        textAnchor="middle"
        dominantBaseline="middle"
        clipPath="url(#rightClip)"
        style={{
          fill: '#C62E65',
        }}
      >
        {'&'}
      </text>
    </svg>
  );
};

export default AmpersandIcon;
