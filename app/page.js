import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to Virtual Classroom</h1>
      {session ? (
        <Link href="/dashboard">Go to Dashboard</Link>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}