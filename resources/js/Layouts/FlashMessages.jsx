import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function FlashMessages() {
  const { flash } = usePage().props;
  const [visible, setVisible] = useState(false);
  const message = flash?.error || flash?.success;

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible || !message) return null;

  return (
    <div className="row mb-3">
      <div className="col-12">
        <div
          className={`alert alert-${flash?.error ? "danger" : "success"} alert-dismissible fade show`}
          role="alert"
        >
          {message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}
