
export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  icon: string;
}

export interface CrowdfundingStatus {
  target: number;
  current: number;
  donorsCount: number;
}
