import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Globe } from "lucide-react";
import Socials from "@/components/socials";

export default function HeroSection() {
  return (
    <>
      <section className="grid items-center gap-20 lg:gap-8 lg:grid-cols-2 py-30">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge className="mb-9">
            <Globe />
            Fullstack Web Developer
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Hi I'm, Rouen Quirino</h1>
          <p className="max-w-lg text-muted-foreground text-lg lg:text-xl mb-9">
            Committed to continuous learning and staying up-to-date with
            industry trends and technologies.
          </p>
          <div className="flex gap-3 mb-5">
            <Socials />
          </div>
          <div className="flex gap-5">
            <a href="documents/rouen-quirino.pdf" target="_blank">
              <Button>
                <Download />
                Download CV
              </Button>
            </a>
            <a href="#project-section">
              <Button variant="outline" className="ml-2">
                View Projects
                <ArrowRight />
              </Button>
            </a>
          </div>
        </div>
        <div>
          <img
            src="images/hero-image.jpg"
            alt="hero image"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </section>
    </>
  );
}
