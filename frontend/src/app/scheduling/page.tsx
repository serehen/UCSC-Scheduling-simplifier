import { SubjectButton } from "../components/buttons/page";
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function Subjects() {
    const { data, error } = await supabase
    .from("Courses")
    .select("class_nbr, subject");
    if (error) {
        console.error("Error fetching subjects:", error);    
        return <div>Error loading subjects</div>;
    }
    if (!data || data.length === 0) {
        return (
            <main className="min-h-screen bg-white p-6 flex-col">
                <h1 className= "text-xl text-center text-gray-800 mt-4">
                    No subjects found
                </h1>
            </main>
        );
    }
    const uniqueSubjects = new Set(data.map(item => item.subject));

  return (
    <main className="min-h-screen bg-white p-6 flex-col">
      <h1 className="text-4xl font-bold text-center text-blue-500">
        Class Subjects
      </h1>
        <div className="grid border-amber-50 md:grid-cols-5 gap-5 mt-4 grid-cols-2 col-end-10 border md:border-blue-500 p-4 rounded">
    {Array.from(uniqueSubjects).map((item) => (
      <h1 key={item} id={item} className="text-2xl justify-center text-center items-center text-white p-4 rounded ">
      <SubjectButton text={item} />
      </h1>
    ))}
        </div>
    </main>
    );  
}
