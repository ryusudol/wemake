import { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectPairProps {
  label: string;
  description: string;
  name: string;
  required?: boolean;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
}

export default function SelectPair({
  label,
  description,
  name,
  required,
  placeholder,
  options,
}: SelectPairProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col space-y-2">
      <Label
        className="flex flex-col items-start gap-1"
        onClick={() => setOpen(true)}
      >
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>
      <Select
        open={open}
        onOpenChange={setOpen}
        name={name}
        required={required}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
