import LogoutForm from "@/app/components/ui/Logout-Form";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Wellcome Admin Dashboard Page</h1>
      <br />
      <LogoutForm />
    </div>
  );
}