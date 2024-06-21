import Link from "next/link";
import React from "react";

export default function CustomLink({href, children, className, color = "accent"}:{href: string, children: React.ReactNode, className?: string, color?: string}) {
    return <Link className={`text-${color}` + className} href={href}>{children}</Link>
}