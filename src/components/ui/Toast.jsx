import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong card-border rounded-xl px-5 py-4 flex items-center gap-3 shadow-card min-w-[280px]"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="text-success shrink-0" size={20} />
            ) : (
              <XCircle className="text-red-400 shrink-0" size={20} />
            )}
            <p className="text-sm text-text flex-1">{toast.message}</p>
            <button onClick={onClose} className="text-muted hover:text-text" aria-label="Dismiss">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
