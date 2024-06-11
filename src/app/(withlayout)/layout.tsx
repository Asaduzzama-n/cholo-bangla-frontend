"use client";
import { isLoggedIn } from "@/helpers/auth.helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <p>.....LOADING</p>;
  }
  return <div>{children}</div>;
};

export default DashboardLayout;
