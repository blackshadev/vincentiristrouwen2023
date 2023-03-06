type Props = {
  label: string;
  formId: string;
  name: string;
  placeholder?: string;
  className?: string;
}

export default function FormInput({name, formId, placeholder, label, className}: Props) {
  const inputId = `${formId}-${name}`;

  return <div className={className}>
    <label htmlFor={inputId} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        type="email"
        name={name}
        id={inputId}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  </div>;
}