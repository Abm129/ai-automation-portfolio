export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 border-b border-gray-800">
      <h1 className="font-bold">Abenezer</h1>
      <div className="space-x-4">
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}