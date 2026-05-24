// components/PathfinderWizard/PathfinderStep.js

import * as LucideIcons from "lucide-react";
import Select from "react-select";

export default function PathfinderStep({
  step,
  value,
  setValue,
  onNext,
  onBack, 
  index,
  total
}) {
  const Icon = LucideIcons[step.icon] || LucideIcons.HelpCircle;

  function handleChange(e) {
    if (step.type === "checkbox") {
      const checked = [...(value || [])];
      if (e.target.checked) {
        checked.push(e.target.value);
      } else {
        const idx = checked.indexOf(e.target.value);
        if (idx >= 0) checked.splice(idx, 1);
      }
      setValue(checked);
    } else {
      setValue(e.target.value);
    }
  }

  const isComplete = step.type === "checkbox" ? 
    (value && value.length > 0) : 
    (value && value.length > 0);

  return (
    <div className="pathfinder-card card shadow-sm nitLightGradient ">
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-wrapper me-3">
            <Icon size={32} className="text-secondry" />
          </div>
          <div>
            <h5 className="card-title text-dark mb-1">{step.question}</h5>
            <small className="text-muted">Step {index + 1} of {total}</small>
          </div>
        </div>

        <form>

            {step.type === "select" && (
              <div className="my-4 pt-2 pb-2">
                <Select
                  instanceId={`select-${step.key}`} // prevents accessibility warning
                  placeholder="Please select an option..."
                  value={
                    step.options.find((opt) => opt.value === value) || null
                  }
                  onChange={(selected) => handleChange({ target: { value: selected?.value } })}
                  options={step.options}
                  isSearchable={false} // you can set true if needed
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: "12px",
                      borderColor: state.isFocused ? "#0d6efd" : "#dee2e6",
                      boxShadow: state.isFocused ? "0 0 0 2px rgba(13,110,253,0.2)" : "none",
                      padding: "2px 4px",
                      fontSize: "1.05rem",
                      minHeight: "50px",
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "10px",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      zIndex: 9999,
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused
                        ? "rgba(13,110,253,0.08)"
                        : state.isSelected
                        ? "#0d6efd"
                        : "#fff",
                      color: state.isSelected ? "#fff" : "#212529",
                      padding: "10px 15px",
                      cursor: "pointer",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#212529",
                      fontWeight: 500,
                    }),
                  }}
                />
              </div>
            )}


          {step.type === "checkbox" && (
            <div className="my-3">
              <div className="row">
                {step.options.map(opt => (
                  <div key={opt.value} className="col-md-6 mb-2">
                    <div className="form-check form-check-card">
                      <input
                        type="checkbox"
                        id={opt.value}
                        value={opt.value}
                        checked={(value || []).includes(opt.value)}
                        onChange={handleChange}
                        className="form-check-input"
                      />
                      <label htmlFor={opt.value} className="form-check-label">
                        {opt.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-outline-secondary"
            type="button"
            disabled={index === 0}
            onClick={onBack}
          >
            <LucideIcons.ArrowLeft size={16} className="me-1" />
            Back
          </button>
          <button
            className="btn btn-primary "
            type="button"
            onClick={onNext}
            disabled={!isComplete}
          >
            {index === total - 1 ? (
              <>
                Show Results
                <LucideIcons.CheckCircle size={16} className="ms-1" />
              </>
            ) : (
              <>
                Next
                <LucideIcons.ArrowRight size={16} className="ms-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
