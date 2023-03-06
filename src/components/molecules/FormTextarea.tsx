type Props = {
  label: string;
  formId: string;
  name: string;
  placeholder?: string;
  className?: string;
};

export default function FormTextarea({ name, formId, placeholder, label, className }: Props) {
  const inputId = `${formId}-${name}`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name={name}
          id={inputId}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:py-1.5 sm:text-sm sm:leading-6"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
