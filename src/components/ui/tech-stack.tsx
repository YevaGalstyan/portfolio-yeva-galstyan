import React from "react";
import { Icons } from "./icons/icons";
import { TechStack, TechStackEnum } from "@/types/techStack";

type TechStackItem =
  | TechStackEnum
  | TechStack;

interface TechStackBadgesProps {
  techStack: TechStackItem[];
  addSeparators?: boolean;
  iconWrapperClassName?: string;
  iconItemClassName?: string
}

// Default configuration with per-icon fallback sizes
const techStackConfig: Record<
  TechStackEnum,
  { iconKey: keyof typeof Icons; width?: number; height?: number }
> = {
  Angular: { iconKey: "angular", width: 24, height: 24 },
  Typescript: { iconKey: "typescript", width: 18, height: 18 },
  Sass: { iconKey: "sass", width: 24, height: 24 },
  Figma: { iconKey: "figma", width: 18, height: 18 },
  Azure: { iconKey: "azure", width: 18, height: 18 },
  AntD: { iconKey: "antd", width: 20, height: 20 },
  Analytics: { iconKey: "analytics", width: 24, height: 24 },
  React: { iconKey: "react", width: 20, height: 20 },
  ViteJs: { iconKey: "viteJs", width: 20, height: 20 },
  Tailwind: { iconKey: "tailwind", width: 20, height: 20 },
  Redux: { iconKey: "redux", width: 20, height: 20 },
  Mapbox: { iconKey: "mapbox", width: 24, height: 24 },
  NgRx: { iconKey: "ngrx", width: 24, height: 24 },
  Less: { iconKey: "less", width: 24, height: 24 },
  NextJs: { iconKey: "nextJs", width: 24, height: 24 },
  Jira: { iconKey: "jira", width: 24, height: 24 },
  YouTrack: { iconKey: "youTrack", width: 24, height: 24 },
  AdobeXD: { iconKey: "adobeXd", width: 24, height: 24 },
  Git: { iconKey: "git", width: 20, height: 20 },
  Javascript: { iconKey: "javascript", width: 20, height: 20 },
  Webpack: { iconKey: "webpack", width: 24, height: 24 },
  Axios: { iconKey: "axios", width: 20, height: 20 },
  JQuery: { iconKey: "jquery", width: 20, height: 20 },
};

export const TechStackBadges: React.FC<TechStackBadgesProps> = ({
  techStack,
  addSeparators = true,
  iconWrapperClassName = "gap-1",
  iconItemClassName = "",
}) => {
  return (
    <div className={`flex items-center  ${iconWrapperClassName}`}>
      {techStack.map((item, index) => {
        const name = typeof item === "string" ? item : item.name;
        const overrideW = typeof item === "object" ? item.width : undefined;
        const overrideH = typeof item === "object" ? item.height : undefined;

        const config = techStackConfig[name];
        if (!config) return null;

        const IconComponent = Icons[config.iconKey];

        const width = overrideW ?? config.width ?? 20;
        const height = overrideH ?? config.height ?? 20;

        return (
          <div className={`flex gap-1 ${iconItemClassName}`} key={name}>
            <IconComponent width={width} height={height} />

            {index < techStack.length - 1 && addSeparators && <span className="mx-1">|</span>}
          </div>
        );
      })}
    </div>
  );
};
