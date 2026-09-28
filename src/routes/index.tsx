import { createFileRoute } from "@tanstack/react-router";
import { Desk } from "@/components/Desk";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Desk />
    </main>
  );
}
