import { Button } from "../ui/button";
import Illustration from "./Illustration";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-center text-">
        <span className="text-gradient">ExpenseTracker</span>, Keep Your{" "}
        <span className="text-gradient">Finances</span> in{" "}
        <span className="text-gradient">Check</span>.
      </h1>
      <p className="text-lg text-center">
        Your ultimate tool for managing your finances with ease and confidence.
      </p>
      <Button size="lg" className="mx-auto text-lg">
        Get Started 🚀
      </Button>
      <div className="w-1/2 max-md:w-3/4 mx-auto mt-2">
        <Illustration />
      </div>
    </section>
  );
}
