"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Expense from "./Expense";
import Income from "./Income";
import Recent from "./Recent";
import Overview from "./Overview";

type TContent = {
  login: {
    title: string;
    description: string;
    devider: string;
    footer: string;
    button: string;
    placeholder: {
      email: string;
      password: string;
    };
  };
  register: {
    title: string;
    description: string;
    devider: string;
    footer: string;
    placeholder: {
      name: string;
      email: string;
      password: string;
    };
  };
};

export default function TabExpenseIncome() {
  return (
    <Tabs defaultValue="expense" className="space-y-4">
      <TabsList className="grid w-fit grid-cols-2">
        <TabsTrigger value="expense">Expense</TabsTrigger>
        <TabsTrigger value="income">Income</TabsTrigger>
      </TabsList>
      <TabsContent value="expense">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <Expense />
            <Overview />
          </div>
          <div>
            <Recent />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="income">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <Income />
            <Overview />
          </div>
          <div>
            <Recent />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
