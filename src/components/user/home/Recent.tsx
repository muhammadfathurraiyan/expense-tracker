import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Fuel,
  Hospital,
  Settings2,
  Utensils,
} from "lucide-react";
import React from "react";

export default function Recent() {
  return (
    <Card>
      <CardHeader className="">
        <CardTitle>Recent Expense.</CardTitle>
        <CardDescription>You made 10 total expense today.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Utensils size={18} /> <p>Daily Meal.</p>
          </div>
          <p>$200</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Fuel size={18} /> <p>Gas.</p>
          </div>
          <p>$200</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hospital size={18} /> <p>Medicine.</p>
          </div>
          <p>$200</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings2 size={18} /> <p>Other.</p>
          </div>
          <p>$200</p>
        </div>
      </CardContent>
    </Card>
  );
}
