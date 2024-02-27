"use client";

import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/2024");
  }, []);
  return <></>;
}
