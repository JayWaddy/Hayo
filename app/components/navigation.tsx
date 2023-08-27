"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "./icons";

export default function Navigation() {
  type Props = {
    className?: string;
    title?: string;
  };

  interface NavLink {
    title: string;
    path: string;
  }

  const pathname: string = usePathname();
  const routes: NavLink[] = [
    {
      title: "Translator",
      path: "/",
    },
    {
      title: "Dictionary",
      path: "/dictionary",
    },
  ];

  const PageTitle: FunctionComponent<Props> = ({ title }) => {
    return <span className="flex mx-auto font-bold">{title}</span>;
  };

  return (
    <nav className="text-xs">
      <ul className="relative flex w-full h-full">
        {pathname === routes[0].path ? (
          <>
            <PageTitle title={routes[0].title} />
            <li className="absolute right-0">
              <Link className="flex" href={routes[1].path}>
                {routes[1].title}
                <button className="ml-2">
                  <ArrowIcon />
                </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <PageTitle title={routes[1].title} />
            <li className="absolute left-0">
              <Link className="flex" href={routes[0].path}>
                <button className="mr-2 -scale-x-100">
                  <ArrowIcon />
                </button>
                {routes[0].title}
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
