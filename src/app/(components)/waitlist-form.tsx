'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

export function WaitlistForm() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [isInfluencer, setIsInfluencer] = React.useState(false);
  const [isAgency, setIsAgency] = React.useState(false);
  const [isIndividual, setIsIndividual] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto text-center space-y-8 py-8"
    >
      <div className="space-y-4">
        <h2
          className="text-3xl font-bold text-foreground font-serif"
        >
          Join the Waitlist
        </h2>
        <p className="text-foreground/80 font-medium text-lg">
          Experience the future of AI-powered social influence.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex justify-center gap-6 mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isInfluencer}
              onCheckedChange={(checked) => setIsInfluencer(checked as boolean)}
            />

            <label
              htmlFor="influencer"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I'm an influencer
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isAgency}
              onCheckedChange={(checked) => setIsAgency(checked as boolean)}
            />

            <label
              htmlFor="agency"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I'm a business
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isIndividual}
              onCheckedChange={(checked) => setIsIndividual(checked as boolean)}
            />

            <label
              htmlFor="individual"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I'm an individual
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-foreground placeholder:text-foreground/60"
          />

          <Button type="submit" size="lg" className="font-semibold">
            Join Waitlist
          </Button>
        </div>
      </form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-medium text-primary"
        >
          Thanks for joining! We'll keep you updated.
        </motion.p>
      )}
    </motion.div>
  );
}
