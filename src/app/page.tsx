import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <SignedOut>
        <Button>
          <Link href="/signin">Sign in</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"></main>
    </>
  );
}
