// 1. imports from external libraries (third parties)
// 2. internal project imports
// 3. style files
// 4. types (if applicable)

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Button asChild variant="default">
        <Link href="/">Home</Link>
      </Button>
    </>
  );
}
