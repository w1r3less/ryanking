"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ user_name: "", user_email: "", user_message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await emailjs.send(
        "service_maw8by4", // Replace with your Service ID
        "template_pu9l0ts", // Use the correct Template ID
        formData, // Make sure formData matches template variables
        "6NzDE2bxURNEv_K28" // Replace with your Public Key
      );

      if (res.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", user_message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Your Message"
            rows={4}
            value={formData.user_message}
            onChange={(e) => setFormData({ ...formData, user_message: e.target.value })}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
    </section>
  );
}
