'use client';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
  }, [status]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user.name} ({session?.user.role})</p>
      {session?.user.role === 'teacher' ? (
        <p>Teacher controls here (e.g., start class, upload files)</p>
      ) : (
        <p>Student features here (e.g., join class, take quiz)</p>
      )}
      <button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
    </div>
  );
}