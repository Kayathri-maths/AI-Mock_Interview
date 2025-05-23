import ProfileContainer from "@/containers/profile-container";
import ToggleContainer from "@/containers/toggle-container";
import { MainRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import Container from "./container";
import LogoContainer from "./logo-container";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4">
          <LogoContainer />
          <nav className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-6">
              {MainRoutes.map((route) => (
                <NavLink
                  to={route.href}
                  key={route.href}
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                >
                  {route.label}
                </NavLink>
              ))}
              {userId && (
                <NavLink
                  to={"/generate"}
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                >
                  Take Interview
                </NavLink>
              )}
            </ul>
          </nav>
          <div className="ml-auto flex items-center gap-6">
            <ProfileContainer />
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
