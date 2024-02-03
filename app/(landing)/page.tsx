import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const landingPage = () => {
  return (
    <>
      <Link href="/sign-in" prefetch>
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up" prefetch>
        <Button>Registrer</Button>
      </Link>
    </>
  );
};

export default landingPage;
