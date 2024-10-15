export interface SearchAddressProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: (newAddress: string, zipcode: string) => void;
  }