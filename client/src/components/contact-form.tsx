import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { mutate, isPending, isSuccess } = useCreateLead();
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    mutate(data);
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100 text-center space-y-4 h-full flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-2">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
        <p className="text-slate-500 max-w-xs mx-auto">
          Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
          className="mt-4 border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800"
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Start the Conversation</h3>
        <p className="text-slate-500 text-sm">
          Fill out the form below to schedule your free strategy consultation.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="h-11 bg-slate-50 border-slate-200 focus:border-teal-500 focus:ring-teal-500/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-medium">Work Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@company.com" className="h-11 bg-slate-50 border-slate-200 focus:border-teal-500 focus:ring-teal-500/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." className="h-11 bg-slate-50 border-slate-200 focus:border-teal-500 focus:ring-teal-500/20" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">How can we help?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your sales goals and challenges..." 
                    className="min-h-[120px] bg-slate-50 border-slate-200 focus:border-teal-500 focus:ring-teal-500/20 resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg shadow-lg shadow-teal-500/25 transition-all"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Book Strategy Call"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
