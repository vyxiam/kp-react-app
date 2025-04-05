import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import MAIN_LOGO from '@/assets/code-v-square.png'

export function WebLogo() {

  return (
    <Avatar>
      <AvatarImage src={MAIN_LOGO} alt="Code-V"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default WebLogo;


