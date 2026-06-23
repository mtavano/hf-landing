export default function Logo({ size = 28, light = false }) {
  const wordColor = light ? '#ffffff' : '#0a0a0f'
  return (
    <span className="logo">
      <img
        className="logo-mark"
        src="/hf-iso-256.png"
        alt="Hard Fork"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        loading="eager"
        decoding="async"
      />
      <span className="logo-word" style={{ color: wordColor }}>
        Hard&nbsp;Fork
      </span>
    </span>
  )
}
