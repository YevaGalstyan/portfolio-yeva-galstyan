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
  { iconKey: keyof typeof Icons; className?: string }
> = {
  Angular: { iconKey: "angular", className: "w-6 h-6" },
  Typescript: { iconKey: "typescript" },
  Sass: { iconKey: "sass" },
  Figma: { iconKey: "figma" },

  React: { iconKey: "react" },
  Node: { iconKey: "gitHub" },
  Azure: { iconKey: "gitHub" },
  PostgreSQL: { iconKey: "gitHub", className: "w-4 h-4" },
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
              <IconComponent className={config.className} />
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
