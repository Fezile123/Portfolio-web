import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  return (
    <div
      className="fixed bottom-6 right-6 left-6 sm:left-auto z-[100]"
      role="status"
      aria-live="polite"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden glass-strong card-border rounded-xl px-5 py-4 flex items-center gap-3 shadow-card sm:min-w-[320px]"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="text-success shrink-0" size={20} aria-hidden="true" />
            ) : (
              <XCircle className="text-red-400 shrink-0" size={20} aria-hidden="true" />
            )}

            <p className="text-sm text-text flex-1">{toast.message}</p>

            <button onClick={onClose} className="text-muted hover:text-text shrink-0" aria-label="Dismiss notification">
              <X size={16} />
            </button>

            {/* Auto-dismiss progress bar */}
            <motion.span
              key={toast.message}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4, ease: "linear" }}
              className={`absolute bottom-0 left-0 h-0.5 w-full origin-left ${
                toast.type === "success" ? "bg-success" : "bg-red-400"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}