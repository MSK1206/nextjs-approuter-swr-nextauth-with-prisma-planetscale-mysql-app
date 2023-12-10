import { signOut } from '@/auth';

export default function LogoutForm() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className="btn btn-base-100 border border-slate-400 rounded-lg p-1 my-5 w-[250px] hover:text-transparent">
        <span className="bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          Sign out
        </span>
      </button>
    </form>
  );
}
