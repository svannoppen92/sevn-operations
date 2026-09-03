import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "organization", label: "Organization", type: "text", autoComplete: "organization" },
  { id: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
] as const;

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Inquiry sent", {
        description: "Thanks for reaching out — you'll get a reply within two business days.",
      });
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
            </Label>
            <Input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.id === "name" || field.id === "email"}
              className="h-11 rounded-md border-border bg-card"
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry" className="text-sm font-medium">
          Inquiry
        </Label>
        <Textarea
          id="inquiry"
          name="inquiry"
          rows={5}
          required
          placeholder="What's on fire this week?"
          className="rounded-md border-border bg-card"
        />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="rounded-md">
        {submitting ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
