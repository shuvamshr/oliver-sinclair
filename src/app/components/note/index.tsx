import Link from "next/link";

interface NoteProps {
  title?: string;
  description?: string;
  link?: string;
}

export default function Note({ title, description, link }: NoteProps) {
  return (
    <div className="w-full font-sans font-base text-sm text-gray-800 bg-gray-300 px-5 py-4 my-4 rounded-lg border-2 border-gray-300 leading-relaxed">
      <strong className="text-gray-800">{title}</strong>
      <br /> {description}
      {link && (
        <>
          <br />
          <br />
          <Link
            href={link}
            className="font-medium underline text-gray-700 text-xs"
            target="_blank"
          >
            Learn more about this credential
          </Link>
        </>
      )}
    </div>
  );
}
