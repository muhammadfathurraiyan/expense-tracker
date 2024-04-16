"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoogleIcon from "./GoogleIcon";
import { Label } from "../ui/label";

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

export default function AuthForm({ content }: { content: TContent }) {
  return (
    <Tabs defaultValue="login" className="w-[400px] max-md:w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">{content.login.title}</CardTitle>
            <CardDescription className="text-center">
              {content.login.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder={content.login.placeholder.email}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>
              <Button className="w-full">Login</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex text-sm justify-center">
                <span className="bg-background px-2 text-muted-foreground">
                  {content.login.devider}
                </span>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="w-full flex items-center gap-2"
            >
              <GoogleIcon />
              Google
            </Button>
          </CardContent>
          <CardFooter className="flex items-center justify-center flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              {content.login.footer}
            </p>
            <TabsList className="h-0 p-0">
              <TabsTrigger
                value="register"
                className="h-0 p-0 text-primary underline"
              >
                {content.login.button}
              </TabsTrigger>
            </TabsList>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {content.register.title}
            </CardTitle>
            <CardDescription className="text-center">
              {content.register.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={content.register.placeholder.name}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder={content.register.placeholder.email}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>
              <Button className="w-full">Register</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex text-sm justify-center">
                <span className="bg-background px-2 text-muted-foreground">
                  {content.register.devider}
                </span>
              </div>
            </div>
            <Button
              variant={"outline"}
              className="w-full flex items-center gap-2"
            >
              <GoogleIcon />
              Google
            </Button>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-center text-sm text-muted-foreground">
              {content.register.footer}
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
