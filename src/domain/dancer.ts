export interface Dancer {
  id: string;
  name: string;
  style: string;
  crew: string;
  country: string;
  rank?: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'retired'; 
}
