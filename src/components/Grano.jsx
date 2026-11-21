// Grano de café decorativo. El color sale del CSS (.grano).
export default function Grano() {
  return (
    <svg className="grano" viewBox="0 0 40 60" aria-hidden="true">
      <ellipse cx="20" cy="30" rx="15" ry="24" />
      <path d="M20 8 C9 22 31 36 20 52" fill="none" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
