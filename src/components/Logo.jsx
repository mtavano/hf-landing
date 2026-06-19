export default function Logo({ size = 28, light = false }) {
  const stroke = light ? '#ffffff' : '#0a0a0f'
  return (
    <span className="logo" style={{ '--logo-size': `${size}px` }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hf-grad" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0" stopColor="#9b86ff" />
            <stop offset="0.5" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#4f24d0" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#hf-grad)" />
        {/* Fork: a branch splitting — the "hard fork" mark */}
        <path
          d="M11 8.5v6.4c0 1.2.97 2.1 2.1 2.1h5.8c1.13 0 2.1.94 2.1 2.1v4.4"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="11" cy="8.5" r="2.2" fill="#fff" />
        <circle cx="21" cy="8.5" r="2.2" fill="#fff" />
        <circle cx="21" cy="23.5" r="2.2" fill="#fff" />
        <path d="M21 10.7v4.4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="logo-word" style={{ color: stroke }}>
        Hard&nbsp;Fork
      </span>
    </span>
  )
}
