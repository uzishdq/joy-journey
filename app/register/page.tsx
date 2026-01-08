import RegisterForm from "@/components/form/register-form";

export default function RegisterPage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 gradient-joy">
      <div className="w-full max-w-lg">
        <RegisterForm />
      </div>
    </main>
  );
}
