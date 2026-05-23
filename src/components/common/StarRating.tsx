import { Star } from "lucide-react";
import type { StarRatingProps } from "@/types/type";

export function StarRating({ count }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}
