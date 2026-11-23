export const SCHEMA_VERSION = 1 as const;
export type DocumentMode = 'resume' | 'cv';
export type TemplateId = 'minimal' | 'modern' | 'sidebar' | 'academic';
export type PageFormat = 'a4' | 'letter';
export type FontFamilyId = 'sans' | 'serif' | 'editorial' | 'mono';
export type SectionKind =
  | 'summary'
  | 'experience'
  | 'education'
  | 'projects'
  | 'skills'
  | 'certifications'
  | 'languages'
  | 'publications'
  | 'awards'
  | 'custom';

export interface SocialLink {
  id: string;
  lable: string;
  url: string;
}

export interface PersonalInfo {
  firstName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  photoDataUrl?: string;
  links: SocialLink[];
}

export interface EntryItem {
    id: string;
    title: string;
    subtitle: string;
    meta: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    highlights: string[];
    tags: string[];
    url: string;
}

export interface Section {
  id: string;
  kind: SectionKind;
  title: string;
  visible: boolean;
  content: string;
  items: EntryItem[];
}

export interface DesignConfig {
  template: TemplateId;
  fontFamily: FontFamilyId;
  fontSizePt: number;
  lineHeight: number;
  accentColor: string;
  marginMm: number;
  columns: 1 | 2;
  sectionSpacing: number;
  pageFormat: PageFormat;
}

export interface DocumentMeta {
  id: string;
  mode: DocumentMode;
  title: string;
  schemaVersion: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileDocument extends DocumentMeta {
  personal: PersonalInfo;
  design: DesignConfig;
  sections: Section[];
}