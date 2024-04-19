import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingDown } from "lucide-react";
import { FormDialog } from "./FormDialog";

export default function Expense() {
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
      <Card className="col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <TrendingDown /> Your Expense
          </CardTitle>
          <CardDescription className="leading-relaxed">
            If you spend money today create your new expense today to track your
            total expense. Click the button bellow to create your new expense.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <FormDialog />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle className="text-4xl">$1,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="25% increase" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-4xl">$5,329</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={10} aria-label="25% increase" />
        </CardFooter>
      </Card>
    </div>
  );
}
