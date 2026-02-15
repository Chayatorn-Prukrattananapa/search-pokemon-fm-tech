"use client";

interface SearchBarProps {
    name: string;
    setName: (name: string) => void;
    onSearch: () => void;
}

export default function SearchBar({ name, setName, onSearch }: SearchBarProps) {
    return (
        <form className="w-full max-w-md flex flex-row mb-4" onSubmit={(e) => { e.preventDefault(); onSearch(); }}>
            <input type="text" placeholder="Search..." value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2 w-full max-w-sm mr-2"
            />
            <button
                className="bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2 border-2 border-blue-500 hover:border-blue-600"
                type="submit">
                Search
            </button>
        </form>
);
}