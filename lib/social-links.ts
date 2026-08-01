export interface SocialLink {
  id: "facebook" | "linkedin" | "twitter" | "instagram" | "youtube";
  label: string;
  url: string;
}

/**
 * Social links are sourced from NEXT_PUBLIC_SOCIAL_* environment variables
 * (see .env.example). Any platform without a URL configured is simply
 * omitted here, so components rendering this list never need their own
 * "is this one filled in yet" checks — an empty/unset env var just means
 * that icon doesn't render anywhere on the site until a URL is added.
 */
export function getSocialLinks(): SocialLink[] {
  const candidates: { id: SocialLink["id"]; label: string; url?: string }[] = [
    { id: "facebook", label: "Facebook", url: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK },
    { id: "linkedin", label: "LinkedIn", url: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN },
    { id: "twitter", label: "X (Twitter)", url: process.env.NEXT_PUBLIC_SOCIAL_TWITTER },
    { id: "instagram", label: "Instagram", url: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM },
    { id: "youtube", label: "YouTube", url: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE },
  ];

  return candidates.filter(
    (link): link is { id: SocialLink["id"]; label: string; url: string } =>
      Boolean(link.url && link.url.trim() !== "")
  );
}
