export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          dir="auto"
          className="rounded-full border border-charcoal/20 px-3 py-1 font-mono text-xs text-charcoal transition-colors hover:border-saffron hover:bg-saffron hover:text-[#1c1b19]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
