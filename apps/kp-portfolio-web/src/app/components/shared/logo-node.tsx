import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MAIN_LOGO from '@/assets/code-v-square.png'

export function LogoNode(){
  return(
    <Avatar>
      <AvatarImage src={MAIN_LOGO} alt="VA-CODE" />
      <AvatarFallback>VA-CODE</AvatarFallback>
    </Avatar>
  )
}

export const IconLogoNode = (
  <Avatar>
    <AvatarImage src={MAIN_LOGO} alt="VA-CODE"/>
    <AvatarFallback>VA-CODE</AvatarFallback>
  </Avatar>
);

export default LogoNode
