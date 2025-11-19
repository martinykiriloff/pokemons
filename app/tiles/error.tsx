"use client";

import Error from "../components/Error";

export default function ErrorPage({
  error,
  reset,
}: {
  error: string;
  reset: () => void;
}) {
  return <Error error={error} reset={reset} />;
}
