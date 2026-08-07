export default function SectionBlobs() {
  return (
    <>
      <div
        className="absolute rounded-full pointer-events-none opacity-50 z-0"
        style={{
          filter: 'blur(90px)',
          background: 'radial-gradient(circle, rgba(var(--accent-rgb),0.28), transparent 70%)',
          width: 420,
          height: 420,
          top: -140,
          left: -120,
          animation: 'blobFloat 16s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none opacity-50 z-0"
        style={{
          filter: 'blur(90px)',
          background: 'radial-gradient(circle, rgba(var(--accent2-rgb),0.22), transparent 70%)',
          width: 360,
          height: 360,
          bottom: -140,
          right: -100,
          animation: 'blobFloat 16s ease-in-out infinite -8s',
        }}
      />
    </>
  );
}
