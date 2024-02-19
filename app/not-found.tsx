"use client";

import React from "react";

export default function CustomNotFound() {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/");
    }
  }, []);
  return <></>;
}
