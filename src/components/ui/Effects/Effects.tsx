type EffectProps = {
  directionY: string; // It can be bottom OR top
  directionX: string; // It can be left OR right
};

export const EffectOne = ({ directionX, directionY }: EffectProps) => {
  return (
    <span className={`absolute ${directionY}-10 ${directionX}-10 z-[-1]`}>
      <svg
        width={217}
        height={229}
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear_1179_5)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_5"
            x1="76.5"
            y1={281}
            x2="76.5"
            y2="1.22829e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3056D3" stopOpacity="0.08" />
            <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export const EffectTwo = ({ directionX, directionY }: EffectProps) => {
  return (
    <span className={`absolute ${directionY}-10 ${directionX}-10 z-[-1]`}>
      <svg
        width={75}
        height={75}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
          fill="url(#paint0_linear_1179_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_4"
            x1="-1.63917e-06"
            y1="37.5"
            x2={75}
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#13C296" stopOpacity="0.31" />
            <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};
