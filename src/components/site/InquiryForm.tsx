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

const WEB3FORMS_ACCESS_KEY = "62e99898-8dbc-4e96-b3f2-939423aa87db";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New inquiry from sevn operations website");
    formData.append("from_name", "sevn operations website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        toast.success("Inquiry sent", {
          description: "Thanks for reaching out — you'll get a reply within two business days.",
        });
      } else {
        toast.error("Something went wrong", {
          description: "Please try again, or email sevn.operations@gmail.com directly.",
        });
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or email sevn.operations@gmail.com directly.",
      });
    } finally {
      setSubmitting(false);
    }
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
