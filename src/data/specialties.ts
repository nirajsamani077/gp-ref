export interface SpecialtyStyle {
  label:  string
  border: string   // left border + active pill bg
  bg:     string   // card background tint
  text:   string   // tag badge text
  pill:   string   // tag badge background
}

// Keyed by the first tag of each note (= primary specialty)
export const SPECIALTY_STYLES: Record<string, SpecialtyStyle> = {
  haematology:      { label: 'Haematology',      border: '#fc8181', bg: '#fff5f5', text: '#9b2335', pill: '#fed7d7' },
  gastroenterology: { label: 'Gastroenterology', border: '#4fd1c5', bg: '#e6fffa', text: '#234e52', pill: '#b2f5ea' },
  msk:              { label: 'MSK',               border: '#f6ad55', bg: '#fffaf0', text: '#7b341e', pill: '#feebc8' },
  dermatology:      { label: 'Dermatology',       border: '#b794f4', bg: '#faf5ff', text: '#44337a', pill: '#e9d8fd' },
  respiratory:      { label: 'Respiratory',       border: '#63b3ed', bg: '#ebf8ff', text: '#2a4365', pill: '#bee3f8' },
  cardiology:       { label: 'Cardiology',        border: '#fc8181', bg: '#fff5f5', text: '#822727', pill: '#fed7d7' },
  neurology:        { label: 'Neurology',         border: '#7f9cf5', bg: '#ebf4ff', text: '#3c366b', pill: '#c3dafe' },
  endocrinology:    { label: 'Endocrinology',     border: '#f6c05c', bg: '#fffff0', text: '#744210', pill: '#fefcbf' },
  gynaecology:      { label: 'Gynaecology',       border: '#f687b3', bg: '#fff5f7', text: '#702459', pill: '#fed7e2' },
  paediatrics:      { label: 'Paediatrics',       border: '#68d391', bg: '#f0fff4', text: '#1c4532', pill: '#c6f6d5' },
  ent:              { label: 'ENT',               border: '#76e4f7', bg: '#e6feff', text: '#065666', pill: '#c4f1f9' },
  oncology:         { label: 'Oncology',          border: '#f56565', bg: '#fff5f5', text: '#742a2a', pill: '#feb2b2' },
  obstetrics:       { label: 'Obstetrics',        border: '#f9a8d4', bg: '#fdf2f8', text: '#831843', pill: '#fbcfe8' },
  vascular:         { label: 'Vascular',          border: '#667eea', bg: '#ebf4ff', text: '#3c366b', pill: '#c3dafe' },
}

// Fallback for unrecognised tags
export const DEFAULT_STYLE: SpecialtyStyle = {
  label:  'General',
  border: '#4a5568',
  bg:     '#f7fafc',
  text:   '#2d3748',
  pill:   '#e2e8f0',
}

export function getSpecialtyStyle(primaryTag: string): SpecialtyStyle {
  return SPECIALTY_STYLES[primaryTag.toLowerCase()] ?? DEFAULT_STYLE
}
