import SvgIcon from "../ui/svgIcon";

// Color configuration
const getColorClasses = (color: string) => {
  const colors: Record<string, { stroke: string; unFillColor: string }> = {
    orange: {
      stroke: "#FF9066",
      unFillColor: "rgba(255, 144, 102, 0.10)",
    },
    blue: {
      stroke: "#61C8FF",
      unFillColor: "rgba(97, 200, 255, 0.10)",
    },
    purple: {
      stroke: "#6A42FF",
      unFillColor: "rgba(106, 66, 255, 0.10)",
    },
    violet: {
      stroke: "#8D52F3",
      unFillColor: "rgba(141, 82, 243, 0.10)",
    },
  };
  return colors[color] || colors.purple;
};

// Circular progress component
const CircularProgress = ({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const colorConfig = getColorClasses(color);

  // Calculate dot position
  const angle = (percentage / 100) * 2 * Math.PI;
  const dotX = 48 + radius * Math.cos(angle);
  const dotY = 48 + radius * Math.sin(angle);

  return (
    <div className="relative h-24 w-24">
      <svg className="h-full w-full -rotate-90 transform">
        {/* Background circle */}
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke={colorConfig.unFillColor}
          strokeWidth="10"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke={colorConfig.stroke}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        {/* Dot at the End */}
        <circle
          cx={dotX}
          cy={dotY}
          r="7"
          fill="white"
          stroke={colorConfig.stroke}
          strokeWidth="2"
        />
      </svg>

      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-13.5 flex-col items-center justify-center rounded-full bg-[rgba(240,241,242,0.06)]">
          <span
            className="font-manrope text-lg font-medium"
            style={{ color: colorConfig.stroke }}
          >
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ stat }: any) => {
  return (
    <div className="cst-gradient-card min-h-[142px] overflow-hidden p-5">
      <div className="flex h-full items-center justify-between">
        <div className="flex h-full flex-col justify-between gap-2">
          <h3 className="text-theme-gray text-sm tracking-[0.168px]">
            {stat.title}
          </h3>
          {!stat?.value && stat?.counties && stat?.counties?.length > 0 ? (
            <div className="flex flex-col gap-1.5">
              {stat?.counties?.map((country: any) => (
                <div
                  key={country.name}
                  className="inline-flex items-center gap-1"
                >
                  <SvgIcon src={country.flag} alt={country.name} />
                  <span className="text-[8px] font-medium tracking-[0.096px] capitalize">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[24px] leading-[120%] font-semibold tracking-[0.288px] text-white">
              {stat.value}
            </p>
          )}
        </div>

        <div className="shrink-0">
          <CircularProgress percentage={stat.percentage} color={stat.color} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
