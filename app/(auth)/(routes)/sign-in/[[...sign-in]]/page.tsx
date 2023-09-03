import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-orange-500 hover:bg-orange-400 text-sm normal-case",
        },
        layout: {
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.dev/terms",
        },
      }}
    />
  );
}
