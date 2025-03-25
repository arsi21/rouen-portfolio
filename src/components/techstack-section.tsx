import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { technologies } from "@/data/technologies";
import { Separator } from "@/components/ui/separator";

import { LaptopMinimal } from "lucide-react";

interface TechstackItemProps {
  icon: string;
  name: string;
}

function TechstackItem({ icon, name }: TechstackItemProps) {
  return (
    <div className="w-20">
      <Card>
        <CardContent>
          <div className="flex flex-col text-center items-center space-y-3">
            <div className="p-2 bg-gray-100 rounded-full w-10 h-10">
              <img src={icon} alt={name} className="w-8" />
            </div>
            <p className="text-xs">{name}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface TechstackPartProps {
  title: string;
  children: React.ReactNode;
}

function TechstackPart({ title, children }: TechstackPartProps) {
  return (
    <div>
      <p className="text-xl font-bold text-center mb-5">{title}</p>
      <div className="flex flex-wrap gap-5 justify-center">{children}</div>
    </div>
  );
}

export default function TechstackSection() {
  return (
    <>
      <section className="flex flex-col text-center items-center py-20">
        <div className="mb-5">
          <Badge variant="secondary" className="mb-3">
            <LaptopMinimal />
            Techstack
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Technologies I Use
          </h2>
          <p className="max-w-lg text-muted-foreground text-lg lg:text-xl mb-9">
            A list of tools and technologies I leverage for web development.
          </p>
        </div>

        <div className="space-y-10">
          {/* Frontend */}
          <Separator />
          <TechstackPart title="Frontend">
            {technologies.frontend.map((technology) => (
              <TechstackItem key={technology.name} {...technology} />
            ))}
          </TechstackPart>

          {/* backend */}
          <Separator />
          <TechstackPart title="Backend">
            {technologies.backend.map((technology) => (
              <TechstackItem key={technology.name} {...technology} />
            ))}
          </TechstackPart>

          {/* databases */}
          <Separator />
          <TechstackPart title="Databases">
            {technologies.databases.map((technology) => (
              <TechstackItem key={technology.name} {...technology} />
            ))}
          </TechstackPart>

          {/* others */}
          <Separator />
          <TechstackPart title="Others">
            {technologies.others.map((technology) => (
              <TechstackItem key={technology.name} {...technology} />
            ))}
          </TechstackPart>
          <Separator />
        </div>
      </section>
    </>
  );
}
