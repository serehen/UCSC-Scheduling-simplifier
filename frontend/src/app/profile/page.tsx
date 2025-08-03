import { redirect } from "next/navigation";

import { createClient } from "../lib/supabaseServer";

export default async function Profile() {
    const supabase = await createClient();

    // Fetch user profile data from Supabase
    const {data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/log_in/main_login");
    }

    return (
        <main className="min-h-screen text-black  bg-white p-6">
            <h1 className="text-black text-2xl font-bold text-center">
                User Profile
      </h1>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-xl mt-4">Hello {data.user.email}.</p>
      </div>
    </main>
  );
}
