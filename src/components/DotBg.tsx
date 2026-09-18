/** うっすらドット柄を敷く背景装飾（絶対配置で親要素いっぱいに広がる） */
export function DotBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: 'radial-gradient(circle, #6A3DE8 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
  )
}
