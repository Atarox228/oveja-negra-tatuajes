interface SectionHeaderProps {
  heading: string;
  subheading?: string;
  theme?: "light" | "dark";
}

export function SectionHeader({ heading, subheading, theme = "light" }: SectionHeaderProps) {
  const dividerColor = theme === "dark" ? "bg-white" : "bg-black";
  const subheadingColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
        {heading}
      </h2>
      <div className={`w-20 h-1 ${dividerColor} mx-auto mb-6`} />
      {subheading && (
        <p className={`text-xl ${subheadingColor} max-w-2xl mx-auto`}>
          {subheading}
        </p>
      )}
    </div>
  );
}