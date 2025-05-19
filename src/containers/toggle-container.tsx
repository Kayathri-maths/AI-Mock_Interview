import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MainRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const ToggleContainer = () => {
  const { userId } = useAuth();
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />{" "}
      </SheetTrigger>
      <SheetContent>
        <nav className="ml-5 mt-5">
          <ul className="flex flex-col items-start gap-8">
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
      </SheetContent>
    </Sheet>
  );
};

export default ToggleContainer;
