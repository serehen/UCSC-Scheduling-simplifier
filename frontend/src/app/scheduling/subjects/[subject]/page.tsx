import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


type Props = {
  params: { subject: string };
};

type Course = {
  class_nbr: number | string;
  subject: string;
  title_long?: string | null;
  title?: string | null;
};

export default async function SubjectPage({ params }: Props) {
  const subject = params.subject;

  if (!subject) return notFound();

  const { data, error } = await supabase
    .from("Courses")
    .select("class_nbr, subject, title_long, title")
    .eq("subject", subject);

  if (error) {
    console.error("Error fetching courses:", error);
    return <div>Error loading courses</div>;
  }

  if (!data || data.length === 0) {
    return (
      <main className="min-h-screen bg-white p-6 flex-col">
        <h1 className="text-xl text-center text-gray-800 mt-4">No courses found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-6 flex-col">
      <h1 className="text-4xl font-bold text-center text-blue-600">{subject} Courses</h1>

      <ul>
        <div className="text-xl text-gray-800 mt-4">
          {data.map((course: Course) => (
            <li key={course.class_nbr} className="text-xl text-gray-800 mt-4 border-1 p-8">
              <div className="font-semibold">{course.title}</div>
              <div className="text-sm">{course.title_long}</div>
            </li>
          ))}
        </div>
      </ul>
    </main>
  );
}
