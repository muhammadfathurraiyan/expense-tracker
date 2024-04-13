import {
  CalendarSearch,
  HandCoins,
  LineChart,
  NotebookPen,
} from "lucide-react";
import { CardFeatures } from "./CardFeatures";

type TContent = {
  title: string;
  description: string;
  card: {
    one: {
      title: string;
      description: string;
    };
    two: {
      title: string;
      description: string;
    };
    three: {
      title: string;
      description: string;
    };
  };
};

export default function Features({ content }: { content: TContent }) {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center gap-8"
    >
      <div className="flex max-md:flex-col items-end max-md:items-center md:gap-4">
        <h1 className="text-4xl text-center">{content.title}</h1>
        <p className="text-center text-xl text-muted-foreground">
          {content.description}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-md:gap-4 max-md:w-full">
        <CardFeatures content={content.card.one} Icon={CalendarSearch} />
        <CardFeatures content={content.card.two} Icon={NotebookPen} />
        <CardFeatures content={content.card.three} Icon={LineChart} />
      </div>
    </section>
  );
}
