import React from 'react';

interface FlowingLinesGraphicProps {
  flip?: boolean;
}

const FlowingLinesGraphic: React.FC<FlowingLinesGraphicProps> = ({ flip = false }) => {
  return (
    <svg
      className="w-full h-full absolute bottom-0 left-0 right-0"
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: 'scaleX(-1)' } : {}}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1b2e9e" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#1b2e9e" stopOpacity="1" />
          <stop offset="100%" stopColor="#1b2e9e" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Flowing wave lines - multiple paths creating complex flow */}
      <path
        d="M0,100 Q100,80 200,100 T400,100 T600,100 T800,100"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0,110 Q150,90 300,110 T600,110 T800,110"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,90 Q120,110 240,90 T480,90 T720,90 T800,90"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="1"
      />
      <path
        d="M0,120 Q180,100 360,120 T720,120 T800,120"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0,80 Q140,120 280,80 T560,80 T800,80"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0,130 Q160,110 320,130 T640,130 T800,130"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,70 Q110,100 220,70 T440,70 T660,70 T800,70"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="1"
      />
      <path
        d="M0,140 Q170,120 340,140 T680,140 T800,140"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0,60 Q130,90 260,60 T520,60 T800,60"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0,150 Q190,130 380,150 T760,150 T800,150"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,105 Q125,85 250,105 T500,105 T750,105 T800,105"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0,95 Q145,115 290,95 T580,95 T800,95"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,115 Q135,95 270,115 T540,115 T800,115"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0,85 Q155,105 310,85 T620,85 T800,85"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="1"
      />
      <path
        d="M0,125 Q165,105 330,125 T660,125 T800,125"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0,75 Q175,95 350,75 T700,75 T800,75"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M0,135 Q185,115 370,135 T740,135 T800,135"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M0,65 Q195,85 390,65 T780,65 T800,65"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="1"
      />
      <path
        d="M0,145 Q105,125 210,145 T420,145 T630,145 T800,145"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M0,55 Q115,85 230,55 T460,55 T690,55 T800,55"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
};

export default FlowingLinesGraphic;
