import FloatingElements from "@/components/joy/floating-element";
import JoyCalendar from "@/components/joy/joy-calender";
import { Navbar } from "@/components/nav";

export default function JourneyPage() {
  return (
    <main className="min-h-screen p-6 md:p-10 gradient-joy">
      <Navbar />
      <FloatingElements />
      <JoyCalendar />
    </main>
  );
}
