import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  dominantBaseline?: 'auto' | 'inherit' | 'alphabetic' | 'hanging' | 'ideographic' | 'mathematical' | 'text-before-edge' | 'middle' | 'central' | 'text-after-edge' | 'use-script' | 'no-change' | 'reset-size';
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 32,
  fontWeight = 'bold',
  letterSpacing = 0,
  dominantBaseline = 'middle',
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize * 0.6} ${fontSize * 1.5}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y={fontSize / 2}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        dominantBaseline={dominantBaseline}
        className="fill-current"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
