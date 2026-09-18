type Props = {
  flip?: boolean
  from?: string
  to?: string
}

/** セクションの間に入れる波型の区切り線（グラデーション対応） */
export function WaveDivider({ flip = false, from = '#ffffff', to = '#f3f0ff' }: Props) {
  return (
    <div style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 64 }}>
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" fill={to} />
      </svg>
    </div>
  )
}
