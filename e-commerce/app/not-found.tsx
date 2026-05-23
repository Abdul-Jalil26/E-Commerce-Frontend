import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="">
      <div className="wrap-style">
        <div className="container-wrap">
          <div className="robot">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="mouth"></div>
          </div>
          <h1 className="glitch">404</h1>
          <p className="p-error">System signal lost. The requested page cannot be located.</p>
          <Link
            href="/"
            className="btn-error"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
