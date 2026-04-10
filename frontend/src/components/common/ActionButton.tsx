import { Plus } from "lucide-react";

export function ActionButton({
  label = "Add New",
  onClick,
  className = "",
  icon = true,
}:any) {
  return (
    <button
      onClick={onClick}
      // Ali changed: updated button to purple-violet gradient with glow
      className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_12px_rgba(139,92,246,0.6)] transition hover:from-violet-600 hover:to-purple-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] active:scale-95 ${className}`}
    >
      {icon && <Plus className="h-4 w-4" />}
      {label}
    </button>
  );
}
