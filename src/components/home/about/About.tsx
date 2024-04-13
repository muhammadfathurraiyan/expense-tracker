type TContent = {
  title: string;
  description: string;
};
export default function About({ content }: { content: TContent }) {
  return (
    <section
      id="about"
      className="md:max-w-screen-md mx-auto flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-4xl w-fit text-center">
        {content.title} <span className="text-gradient">ExpenseTracker.</span>
      </h1>
      <p className="text-center">{content.description}</p>
    </section>
  );
}
