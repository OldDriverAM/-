
export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  icon: string;
  qrCode?: string;
}

export interface CrowdfundingStatus {
  target: number;
  current: number;
  donorsCount: number;
}
