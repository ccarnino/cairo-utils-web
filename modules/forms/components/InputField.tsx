export default function InputField({
  value, 
  type = 'text',
  onChange, 
  placeholder,
  labelText,
  fieldId,
  notes,
  isWarningActive = false,
}: { 
  value: any, 
  type?: string,
  onChange(value: any): void, // eslint-disable-line no-unused-vars
  placeholder: string,
  labelText: string,
  fieldId: string,
  notes?: string,
  isWarningActive?: boolean,
}) {
  return (
    <div className="col-span-6 lg:col-span-4">
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-900">
        {labelText}
      </label>
      <input
        type={type}
        name={fieldId}
        id={fieldId}
        className={`mt-1 block w-full shadow-sm sm:text-sm  rounded-md ${ isWarningActive ? 'border-rose-300 focus:ring-rose-300 focus:border-rose-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500' }`}
        placeholder={placeholder}
        value={value === null || value === undefined ? '' : value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="block mt-1 text-xs font-normal text-gray-700">
        {notes}
      </span>
    </div>
  )
}
