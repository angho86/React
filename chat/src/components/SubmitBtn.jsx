export default function SubmitBtn( { onClick, children } ) {
    return (
        <button
            onClick={onClick}
            className="px-8 py-1 rounded-md bg-violet-500 hover:bg-violet-600 text-white font-bold"
            >
            {children}
            </button>
    );
}