import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const landingPage = () => {
  return (
    <>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Registrer</Button>
      </Link>
    </>
  );
};

export default landingPage;
