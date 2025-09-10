import Link from "next/link";
import { createButton } from "../components/buttons/page";



export default function Subjects() {
  return (
    <main className="min-h-screen bg-white p-6 flex-col">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Class Subjects
      </h1>
      <Link href="/scheduling/subjects/CSE" className="text-2xl justify-center text-center flex items-center">
        {createButton("Computer Science")}
      </Link>
    </main>
  );
}
