
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Subjects() {
    const { data, error } = await supabase
        .from("Courses")
        .select("class_nbr, subject, title_long")
        .eq("subject", "CSE");
    if (error) {
        console.error("Error fetching courses:", error);    
        return <div>Error loading courses</div>;
    }

    if (!data || data.length === 0) {
        return (
            <main className="min-h-screen bg-white p-6 flex-col">
                <h1 className="text-4xl font-bold text-center text-blue-600">
                    Computer Science Courses
                </h1>
                <div className= "text-xl text-center text-gray-800 mt-4">
                    No courses found
                </div>
            </main>
        );
    }
    return (
        <main className="min-h-screen bg-white p-6 flex-col">
            <h1 className="text-4xl font-bold text-center text-blue-600">
                Computer Science Courses
            </h1>
            
            <ul>
                <div className="text-xl text-gray-800 mt-4">
                    {data.map((course) => (
                        <li key={course.class_nbr} className="text-xl text-gray-800 mt-4 border-1 p-8">
                            {course.title_long}
                        </li>
                    ))}
                </div>
            </ul>
        </main>
    );
}