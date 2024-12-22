"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormStatus('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        const { error } = await res.json();
        setFormStatus(error || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <Input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <Textarea name="message" placeholder="Your Message" rows={4} required />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
        {formStatus && (
          <p className="mt-4 text-center text-sm">
            {formStatus}
          </p>
        )}
      </form>
    </section>
  )
}
