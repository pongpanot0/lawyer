// components/SharedInput.jsx
export default function SharedTextfield({
    row = 10,
    label,
    value,
    onChange,
    type = "text",
    placeholder = "",
    name,
    className = "",
    ...props
  }) {
    return (
      <div className="w-full mb-4">
        {label && <label className="block text-sm font-medium  text-gray-700 mb-1">{label}</label>}
        <textarea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={row}
          className={`w-full px-4 py-2 bg-blue-200 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    );
  }
  