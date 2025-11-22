import React from "react";
import { Badge } from "./badge";
import { TechStackEnum } from "@/types/project";
import { Icons } from "./icons/icons";
import { Calendar } from "lucide-react";


interface TechStackBadgesProps {
  techStack: TechStackEnum[];
}

const techStackConfig: Record<
  TechStackEnum,
  { iconKey: keyof typeof Icons; width?: number; height?: number }
> = {
  Angular: { iconKey: "angular", width: 24, height: 24 },
  Typescript: { iconKey: "typescript", width: 18, height: 18 },
  Sass: { iconKey: "sass", width: 24, height: 24 },
  Figma: { iconKey: "figma", width: 18, height: 18 },
  Azure: { iconKey: "azure", width: 18, height: 18  },
  AntD: { iconKey: "antd", width: 20, height: 20  },
  Analytics: { iconKey: "analytics", width: 24, height: 24 },
  React: { iconKey: "react", width: 20, height: 20 },
  ViteJs: { iconKey: "viteJs", width: 20, height: 20 },
  Tailwind: { iconKey: "tailwind", width: 20, height: 20 },
  Redux: { iconKey: "redux", width: 20, height: 20 },
  Mapbox: { iconKey: "mapbox", width: 24, height: 24 },

  Node: { iconKey: "gitHub" },
  PostgreSQL: { iconKey: "gitHub", width: 24, height: 24 },
};

export const TechStackBadges: React.FC<TechStackBadgesProps> = ({ techStack }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {techStack.map((tech, index) => {
        const config = techStackConfig[tech];
        if (!config) return null;

        const IconComponent = Icons[config.iconKey];

        return (
          <React.Fragment key={tech}>
            <div className="flex items-center gap-1">
              <IconComponent width={config.width} height={config.height} />
              {/* <span className="text-sm font-medium">{tech}</span> */}
            </div>

            {/* Divider except for last item */}
            {index < techStack.length - 1 && (
              <span className="mx-1">|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
