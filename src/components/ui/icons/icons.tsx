import { FileIcon } from "lucide-react"
import { AngularIcon } from "./angular-icon"
import { GithubIcon } from "./github-icon"
import { ReactIcon } from "./react-icon"
import { LinkedinIcon } from "./linkeding-icon"
import { TypeScriptIcon } from "./typescript-icon"
import { SassIcon } from "./sass-icon"
import { FigmaIcon } from "./figma-icons"

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  linkedIn: (props: IconProps) => (<LinkedinIcon {...props} />),
  gitHub: (props: IconProps) => (<GithubIcon {...props} />),
  react: (props: IconProps) => (<ReactIcon {...props} />),
  angular: (props: IconProps) => (<AngularIcon {...props} />),
  typescript: (props: IconProps) => (<TypeScriptIcon {...props} />),
  sass: (props: IconProps) => (<SassIcon {...props} />),
  figma: (props: IconProps) => (<FigmaIcon {...props} />),  
}
