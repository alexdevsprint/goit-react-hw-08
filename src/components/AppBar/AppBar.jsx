import AppNavigation from "../AppNavigation/AppNavigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  return (
    <header>
      <AppNavigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
}
