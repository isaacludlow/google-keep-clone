import css from "./sidebar-label.module.css";

interface LabelProps {
  radioId: string;
  iconName: string;
  labelText: string;
  checkedInitially?: boolean;
}

export function SidebarLabel({
  radioId,
  iconName,
  labelText,
  checkedInitially = false,
}: LabelProps) {
  // TODO: Add React context hook.
  var inputHtml = (
    <input
      type="radio"
      id={radioId}
      name="sidebar"
      className={[css.inputLabel, "hidden"].join(" ")}
    ></input>
  );

  if (checkedInitially) {
    inputHtml = (
      <input
        type="radio"
        id={radioId}
        name="sidebar"
        className={[css.inputLabel, "hidden"].join(" ")}
        defaultChecked
      ></input>
    );
  }

  return (
    <>
      {inputHtml}
      <label
        htmlFor={radioId}
        className="flex items-center gap-2 rounded-e-full pb-3 pl-6 pt-3
       hover:bg-slate-200"
      >
        <span className="material-symbols-outlined">{iconName}</span>
        <span className="line-clamp-1">{labelText}</span>
      </label>
    </>
  );
}
