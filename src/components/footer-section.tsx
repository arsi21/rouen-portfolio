import { Separator } from "@/components/ui/separator";

import NavMenu from "@/components/nav-menu";
import Socials from "@/components/socials";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Separator />

      <div className="flex items-center justify-between flex-col lg:flex-row gap-3 py-5 text-muted-foreground">
        <span>&copy; {currentYear} Rouen Quirino</span>

        <NavMenu />

        <div className="flex gap-3">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
