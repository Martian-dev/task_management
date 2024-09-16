"use client";

import { SignIn } from "@clerk/nextjs";
import { Card, CardContent } from "~/components/ui/card";

export function SignInComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-50"></div>
      </div>
      <Card className="border-slate-700 bg-slate-800">
        <CardContent className="p-4">
          <SignIn />
        </CardContent>
      </Card>
    </div>
  );
}

