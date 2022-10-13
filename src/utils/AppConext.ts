import { createContext } from "react";

interface ContextType {
  tags: string[];
  onClear: () => void;
  onDelete: (tag: string) => void;
  onAdd: (tag: string) => void;
}

const AppContext = createContext<ContextType | null>(null);

export default AppContext;
