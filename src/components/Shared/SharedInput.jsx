// components/SharedInput.jsx
export default function SharedInput({
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
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 bg-blue-200 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    );
  }
  