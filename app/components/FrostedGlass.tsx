import React from "react";

interface FrostedGlassProps {
  children: React.ReactNode;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  blur?: "sm" | "md" | "lg" | "xl";
}

const FrostedGlass: React.FC<FrostedGlassProps> = ({
  children,
  className = "",
  rounded = "2xl",
  blur = "md",
}) => {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <div
      className={`bg-white/10 ${blurClasses[blur]} border border-white/20 ${roundedClasses[rounded]} ${className}`}
    >
      {children}
    </div>
  );
};

export default FrostedGlass;