//  ** Import Third Party Packages ** 
import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';
 
export default function SSOCallBack() {
  return <AuthenticateWithRedirectCallback />;
}