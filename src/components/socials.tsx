import { Button } from "@/components/ui/button";

import { socials } from "@/data/socials";

export default function Socials() {
  return (
    <>
      {socials.map((social, index) => (
        <a href={social.link} key={index} target="_blank">
          <Button variant="outline" className="rounded-full" size="icon">
            {social.icon && <social.icon />}
          </Button>
        </a>
      ))}
    </>
  );
}
