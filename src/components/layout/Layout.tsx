import React, { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full grow">{children}</main>
      <Footer />
    </>
  );
};