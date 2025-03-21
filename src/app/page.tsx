import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold">Frank Rodriguez</h1>
      </div>

      <div className="mb-32 mt-12 flex flex-col items-center justify-center gap-8 text-center">
        <p className="text-xl">
          Bienvenido a mi portfolio personal. Esta es la versión optimizada para Vercel.
        </p>
        <div className="mt-8">
          <a
            href="https://github.com/frank-rod/fjrod-oficial"
            className="rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-700 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              GitHub{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Revisa el código fuente en GitHub.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}