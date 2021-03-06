export default function OutputField({
  value,
  labelText,
  fieldId,
  notes,
  isWarningActive = false,
}: { 
  value: any,
  labelText: string,
  fieldId: string,
  notes?: string,
  isWarningActive?: boolean,
}) {
  return (
    <div className="col-span-6 lg:col-span-4">
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700">
        {labelText}
      </label>
      <input
        type="text"
        name={fieldId}
        id={fieldId}
        className={`mt-1 block w-full shadow-sm sm:text-sm bg-gray-50 text-gray-700 rounded-md ${ isWarningActive ? 'border-rose-300' : 'border-gray-300'}`}
        value={value === null || value === undefined ? '' : value}
        disabled={true}
      />
      <span className="block mt-1 text-xs font-normal text-gray-700">
        {notes}
      </span>
    </div>
  )
}
