import Link from "next/link";
import { Button, buttonVariants } from "../../ui/button";
import Illustration from "./Illustration";

type TContent = {
  title: string;
  description: string;
  cta: string;
};

export default function HeroSection({
  content,
  lng,
}: {
  content: TContent;
  lng: string;
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
      <Link href={`/${lng}/auth`}>
        <Button size="lg" className="mx-auto text-lg">
          {content.cta}
        </Button>
      </Link>
      <div className="w-1/2 max-md:w-3/4 mx-auto mt-2">
        <Illustration />
      </div>
    </section>
  );
}
