import { Rocket } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Illustration from "../../../public/illustration.svg";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-3/5 grid gap-2">
        <h1 className="text-center text-">
          <span className="text-gradient">ExpenseTracker</span>, Control Your{" "}
          <span className="text-gradient">Outcome</span> and{" "}
          <span className="text-gradient">Income</span>.
        </h1>
        <p className="text-lg text-center">
          Expense tracker app that helps your finances stay organized and
          efficient.
        </p>
        <Button size="lg" className="mx-auto text-lg">
          Get Started 🚀
        </Button>
        <div className="w-1/2 mx-auto">
          <Image src={Illustration} alt="illustration" />
        </div>
      </div>
    </section>
  );
}
