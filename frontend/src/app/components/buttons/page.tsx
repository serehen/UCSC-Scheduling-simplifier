import Link from "next/link";

export function createButton(text: string) {
  return (
    <span className="feature-button px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
      {text}
    </span>
  );
}

export function SubjectButton({ text }: { text: string }) {
  const href = `/scheduling/subjects/${encodeURIComponent(text)}`;
  return (
    <Link href={href} className="feature-button py-4 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
      {text}
    </Link>
  );
}

export function returnButton() {
  return (
    <Link href="/" className="ml-auto">
      {createButton("Return")}
    </Link>
  );
}