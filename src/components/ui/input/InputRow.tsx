"use client";

interface InputRowProps {
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function InputRow({ onChange, placeholder, type = "text" }: InputRowProps) {
  return <input className="default-wrap py-3 px-5 rounded-4xl fs-m fw-500 outline-none"
  type={type} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />;
}
