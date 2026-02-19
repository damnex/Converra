import { type InsertLead, type Lead } from "@shared/schema";

const leads: Lead[] = [];

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
}

export const storage: IStorage = {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const lead: Lead = {
      id: Date.now(),
      ...insertLead,
      createdAt: new Date().toISOString(),
    };
    leads.push(lead);
    return lead;
  },

  async getLeads(): Promise<Lead[]> {
    return leads;
  },
};
