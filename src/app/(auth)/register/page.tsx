"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import on from "process";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const regexPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const MAX_FILE_SIZE = 2 * 1024 * 1024
const ACCEPTED_FILE_TYPES = ['image/jpg', 'image/png', 'application/pdf']

const registerSchema = z.object({
  username: z.string().min(6, "Username is resquired"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      regexPassword,
      "Password must contain at least one uppercase letter,one lowercase letter, one number, and one special character"
    ),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password is required")
    .regex(
      regexPassword,
      "Password must contain at least one uppercase letter, one lowercase letterm, one lowercase letter, one number, and one special character"),

    file: z
      .any()
      .refine((file) => file instanceof File, 'File is required')
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max file size is 2MB' )
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
        'Only .jpg, .png files are allowed'
      ),
})

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: RegisterSchema) => {
    console.log("Submitted:", data);
  };

  console.log(onSubmit);

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
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
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center">
          Already have an account?
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
