import { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function ExternalLink({
  href,
  children,
  className = "",
  external,
}: ExternalLinkProps) {
  const isExternal =
    external ?? (href.startsWith("http://") || href.startsWith("https://"));

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={className}
    >
      {children}
    </a>
  );
}
