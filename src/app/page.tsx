import PokemonSearch from "@/components/PokemonSearch";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Search Pokemon FM Tech
      </h1>
      <PokemonSearch />
    </div>
  );
}
