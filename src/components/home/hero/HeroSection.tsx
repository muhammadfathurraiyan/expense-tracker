import { Button } from "../../ui/button";
import Illustration from "./Illustration";

export default function HeroSection({
  content,
}: {
  content: {
    title: string;
    description: string;
    cta: string;
  };
}) {
  return (
    <section
      id="home"
      className="md:max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-center text-">
        <span className="text-gradient">ExpenseTracker</span>, {content.title}
      </h1>
      <p className="text-lg text-center">{content.description}</p>
      <Button size="lg" className="mx-auto text-lg">
        {content.cta}
      </Button>
      <div className="w-1/2 max-md:w-3/4 mx-auto mt-2">
        <Illustration />
      </div>
    </section>
  );
}
