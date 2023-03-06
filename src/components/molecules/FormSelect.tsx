type Props = {
  label: string;
  formId: string;
  name: string;
  placeholder: string;
  values: string[];
  className?: string;
};

export default function FormSelect({ name, formId, values, placeholder, label, className }: Props) {
  const inputId = `${formId}-${name}`;

  return (
    <div className={className}>
      <label htmlFor={formId} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <select
        required
        id={inputId}
        name={name}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 invalid:text-gray-400 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6"
      >
        {placeholder && <option value="" selected disabled>{placeholder}</option>}
        {values.map(value => <option key={value}>{value}</option>)}
      </select>
    </div>
  );
}
