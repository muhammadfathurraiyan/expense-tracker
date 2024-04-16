import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import BarChartComponent from "../global/BarChartComponent";

export default function Overview() {
  return (
    <Card className="w-full">
      <CardHeader className="">
        <CardTitle>Overview.</CardTitle>
        <CardDescription>You made 10 total expense today.</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[45vh]">
        <BarChartComponent />
      </CardContent>
    </Card>
  );
}
