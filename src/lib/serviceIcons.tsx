import { Home, Layers, Droplets, AppWindow, CloudRain, type LucideIcon } from "lucide-react";

// Maps each service slug to a representative icon, used for branded panels when
// we don't yet have a real project photo for that service.
export const SERVICE_ICON: Record<string, LucideIcon> = {
  roofing: Home,
  siding: Layers,
  gutters: Droplets,
  windows: AppWindow,
  "storm-damage-restoration": CloudRain,
};
