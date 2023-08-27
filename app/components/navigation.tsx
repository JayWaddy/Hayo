"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const ArrowIcon: FunctionComponent<Props> = ({ className }) => (
    <>
      <span className={className}>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-black"
            d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928933C10.9526 0.538409 10.3195 0.538409 9.92893 0.928933C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9L17 9L17 7L1 7L1 9Z"
          />
        </svg>
      </span>
    </>
  );

  const PageTitle: FunctionComponent<Props> = ({ title }) => {
    return <span className="flex mx-auto font-bold">{title}</span>;
  };

  const RenderNavigation = () => {
    if (pathname === routes[0].path)
      return (
        <>
          <PageTitle title={routes[0].title} />
          <li className="absolute right-0">
            <Link className="flex" href={routes[1].path}>
              {routes[1].title}
              <ArrowIcon className="ml-2" />
            </Link>
          </li>
        </>
      );

    return (
      <>
        <PageTitle title={routes[1].title} />
        <li className="absolute left-0">
          <Link className="flex" href={routes[0].path}>
            <ArrowIcon className="mr-2 -scale-x-100" />
            {routes[0].title}
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className="text-xs">
      <ul className="relative flex w-full h-full">
        <RenderNavigation />
      </ul>
    </nav>
  );
}
