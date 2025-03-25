import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";

import NavMenu from "@/components/nav-menu";
import Socials from "@/components/socials";

export function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div>
          <a href="#home-section" className="font-bold text-lg">
            RQ
          </a>
        </div>

        <div className="hidden lg:flex">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetClose asChild>
                    <SheetTitle>
                      <a href="#home-section" className="font-bold text-lg">
                        RQ
                      </a>
                    </SheetTitle>
                  </SheetClose>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                <NavigationMenu className="items-start px-2">
                  <NavigationMenuList className="gap-1 space-x-0 flex-col items-start">
                    <SheetClose asChild>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#home-section">
                          Home
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </SheetClose>

                    <SheetClose asChild>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#techstack-section">
                          Techstack
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </SheetClose>

                    <SheetClose asChild>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#experience-section">
                          Experience
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </SheetClose>

                    <SheetClose asChild>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#project-section">
                          Project
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </SheetClose>
                  </NavigationMenuList>
                </NavigationMenu>

                <SheetFooter>
                  <div className="flex flex-wrap gap-3">
                    <Socials />
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
