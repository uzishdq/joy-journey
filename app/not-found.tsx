import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/constant";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 gradient-sunset">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-gray-600">This page does not exist.</p>
      <Link
        href={ROUTES.PUBLIC.INDEX}
        className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition"
      >
        Back
      </Link>
    </main>
  );
}
