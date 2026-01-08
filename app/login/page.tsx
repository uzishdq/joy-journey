import LoginForm from "@/components/form/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 gradient-joy">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
}
