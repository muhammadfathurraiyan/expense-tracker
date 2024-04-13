import Link from "next/link";

type TContent = {
  title: string;
  description: {
    one: string;
    two: string;
    three: string;
  };
};

export default function Contact({ content }: { content: TContent }) {
  return (
    <section
      id="contact"
      className="md:max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-4xl w-fit text-center">{content.title}</h1>
      <p className="text-center">
        {content.description.one}{" "}
        <Link
          href="mailto:contact@expensetracker.app"
          target="_blank"
          className="text-primary hover:underline"
        >
          contact@expensetracker.app
        </Link>{" "}
        {content.description.two}{" "}
        <Link
          href="https://twitter.com/home"
          target="_blank"
          className="text-primary hover:underline"
        >
          @expensetracker.x
        </Link>
        {content.description.three}
      </p>
    </section>
  );
}
