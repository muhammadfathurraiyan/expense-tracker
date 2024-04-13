type TContent = {
  title: string;
  footer: string;
};

export default function Footer({ content }: { content: TContent }) {
  return (
    <footer className="md:container px-2 py-8 flex flex-col items-center justify-between relative">
      <div className="absolute top-0 h-1 w-24 rounded-full bg-gradient-to-tl from-gradient1 to-gradient2" />
      <p className="">{content.title}</p>
      <p className="text-xs">&copy; {content.footer}</p>
    </footer>
  );
}
