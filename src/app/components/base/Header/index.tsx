import Menu from '@/app/components/ui/Menu';

export default function Header() {
  return (
    <div className="navbar sticky px-4 py-4">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Sample
        </a>
      </div>
      <div className="navbar-end">
        <Menu />
      </div>
    </div>
  );
}
