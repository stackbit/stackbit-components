export default function Badge({ label }) {
    if (!label) {
        return null;
    }
    return <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">{label}</p>;
}
