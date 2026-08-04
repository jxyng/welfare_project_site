interface Props {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
}

export default function SelectFilter({
  value,
  options,
  placeholder,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      className="rounded-lg border p-3 w-full"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}
