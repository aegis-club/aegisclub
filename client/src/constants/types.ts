import React from "react";

export interface Member {
  id: number;
  name: string;
  position?: string;
  imageUrl?: string;
  bio?: string;
  resumeUrl?: string;
  role?: "Faculty" | "Co-Convener" | "Student";
  team?: "Tech" | "Operations" | "Media" | "Cultural";
  year?: "2nd" | "3rd" | "4th";
  socialLinks?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export interface MemberCardProps {
  member: Member;
}

export interface SocialLinkProps {
  href: string;
  aria: string;
  icon: React.ReactNode;
}
