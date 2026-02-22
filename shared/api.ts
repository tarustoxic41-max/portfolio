/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  details: string;
  github?: string;
  metrics?: { label: string; value: string }[];
  architecture?: string;
  futureImprovements?: string[];
  category: "AI" | "NLP" | "Research" | "Web" | "Hackathon";
}
