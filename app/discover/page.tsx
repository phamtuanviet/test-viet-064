export default function DiscoverPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" 
           style={{ background: 'linear-gradient(135deg, #FF2D55, #7C3AED)' }}>
        <span className="text-4xl">🔍</span>
      </div>
      <h2 className="text-3xl font-bold text-white mb-3">Khám phá</h2>
    </div>
  );
}