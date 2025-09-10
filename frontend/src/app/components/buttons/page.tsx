import Link from "next/link"; 

export async function createButton(text: string) {
  return (
    <span className="feature-button px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
      {text}
    </span>
  );
}

export async function returnButton() {
    return(
        <Link href ="/" className = "ml-auto">
            {createButton("Return")}
        </Link>
    )
}