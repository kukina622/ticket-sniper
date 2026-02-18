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
  const onLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await window.api.openExternal(link);
  };

  return (
    <a href={link} onClick={onLinkClick} className={className} rel={rel}>
      {children}
    </a>
  );
}
