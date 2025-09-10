import { signup } from "../actions";
import { createButton } from "../../components/buttons/page";
import { returnButton } from "../../components/buttons/page";

// This is the main signup page component
// It contains a form for signing up and a link to log in
// The form submits to the signup action defined in actions.tsx
// The login link redirects to the login page

export default function signUp() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <h2 className="text-center text-2xl font-bold text-blue-600">
                Sign Up
            </h2>
            <form className="mt-4  border-b-black rounded text-black">
                <div className="mb-4">
                    <label className="block" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="mt-1 block w-full p-2 border background hover:bg-gray-300"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="mt-1 block w-full p-2 border border-b-black rounded background hover:bg-gray-300"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="flex isolate">
                <button formAction={signup} >{createButton("Sign Up")}</button>
                {returnButton()}
                </div>
            </form>
        </main>
    );
} 