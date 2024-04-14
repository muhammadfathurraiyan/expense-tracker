import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type TContent = {
  title: string;
  description: string;
};

export function CardFeatures({
  content,
  Icon,
}: {
  content: TContent;
  Icon: LucideIcon;
}) {
  return (
    <Card className="w-[350px] max-md:w-full group hover:border-primary duration-300">
      <CardHeader className="group-hover:text-primary duration-300">
        <Icon size={32} />
      </CardHeader>
      <CardContent>
        <CardTitle className="group-hover:text-primary duration-300">{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
