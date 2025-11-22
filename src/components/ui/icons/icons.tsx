import { FileIcon } from "lucide-react"
import { AngularIcon } from "./angular-icon"
import { GithubIcon } from "./github-icon"
import { ReactIcon } from "./react-icon"
import { LinkedinIcon } from "./linkedin-icon"
import { TypeScriptIcon } from "./typescript-icon"
import { SassIcon } from "./sass-icon"
import { FigmaIcon } from "./figma-icons"
import { AzureIcon } from "./azure-icon"
import { AntdIcon } from "./antd-icon"
import { AnalyticsIcon } from "./analytics-icon"
import { ViteJsIcon } from "./vite-icon"
import { TailwindIcon } from "./tailwind-icon"
import { ReduxIcon } from "./redux-icom"
import { MapboxIcon } from "./mapbox-icon"

export type IconProps = React.SVGAttributes<SVGSVGElement>;

export const Icons = {
  linkedIn: (props: IconProps) => (<LinkedinIcon {...props} />),
  gitHub: (props: IconProps) => (<GithubIcon {...props} />),
  react: (props: IconProps) => (<ReactIcon {...props} />),
  angular: (props: IconProps) => (<AngularIcon {...props} />),
  typescript: (props: IconProps) => (<TypeScriptIcon {...props} />),
  sass: (props: IconProps) => (<SassIcon {...props} />),
  figma: (props: IconProps) => (<FigmaIcon {...props} />),  
  azure: (props: IconProps) => (<AzureIcon {...props} />),
  antd: (props: IconProps) => (<AntdIcon {...props} />),
  analytics: (props: IconProps) => (<AnalyticsIcon {...props} />),
  viteJs: (props: IconProps) => (<ViteJsIcon {...props} />),
  tailwind: (props: IconProps) => (<TailwindIcon {...props} />), 
  redux: (props: IconProps) => (<ReduxIcon {...props} />),
  mapbox: (props: IconProps) => (<MapboxIcon {...props} />),
}
