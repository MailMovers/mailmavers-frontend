export interface SelectAddressProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: (newAddress: string, zipcode: string) => void;
  }