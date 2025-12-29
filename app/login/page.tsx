import LoginForm from "@/components/form/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-linear-to-t from-amber-600 via-yellow-400 to-orange-300">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </main>
  );
}
