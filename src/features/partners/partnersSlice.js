import { PARTNERS } from '../../app/shared/PARTNERS'

// Selector to return the entire PARTNERS array
export const selectAllPartners = () => {
  return PARTNERS;
};

// Selector to find and return the first featured partner
export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};