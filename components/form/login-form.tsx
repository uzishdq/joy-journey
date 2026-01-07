"use client";

import { loginSchema } from "@/lib/schema-zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/8bit/card";
import { Input } from "../ui/8bit/input";
import { Button } from "../ui/8bit/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Link from "next/link";
import { ROUTES } from "@/lib/constant";
import { toast } from "../ui/8bit/toast";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    toast("Event has been created", "success");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription className="text-xs">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                  <Link
                    href={ROUTES.PUBLIC.INDEX}
                    className="text-sm text-right underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>

            <div className="mt-10 text-center text-xs">
              Don&apos;t have an account?{" "}
              <Link
                className="underline underline-offset-4"
                href={ROUTES.PUBLIC.REGISTER}
              >
                Register
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
