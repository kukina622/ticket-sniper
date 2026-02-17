type ExternalLinkProps = {
  className?: string;
  children: React.ReactNode;
  link: string;
  rel?: string;
};

export default function ExternalLink({
  children,
  link,
  className,
  rel
}: ExternalLinkProps) {
  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <a href={link} onClick={onLinkClick} className={className} rel={rel}>
      {children}
    </a>
  );
}
