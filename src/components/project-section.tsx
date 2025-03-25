import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ArrowUpRight, FolderOpenDot } from "lucide-react";

import { projects } from "@/data/projects";

interface ProjectItemProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
}

function ProjectItem({
  image,
  title,
  description,
  technologies,
  screenshots,
}: ProjectItemProps) {
  return (
    <Card>
      <CardHeader>
        <img src={image} alt="" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-md mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {/* <Button>
          <ArrowUpRight />
          Read Full Description
        </Button> */}

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <ArrowUpRight />
              View Screenshots
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-full md:min-w-3xl lg:min-w-5xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                Below are the screenshots of the website.
              </DialogDescription>
            </DialogHeader>

            <Card className="min-w-full max-w-5xl">
              <CardContent>
                <Carousel>
                  <CarouselContent>
                    {screenshots?.map((screenshot) => (
                      <CarouselItem key={screenshot}>
                        <img src={screenshot} alt="" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default function ProjectSection() {
  return (
    <section id="experience" className="py-20 mx-auto">
      <div className="">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <FolderOpenDot />
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Highlighted Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A collection of my top projects and notable technical
            accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
