import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <Link href="/">
        <h1>Link to HomePage</h1>
      </Link>
      <h1>This is About Page</h1>
    </div>
  );
}
