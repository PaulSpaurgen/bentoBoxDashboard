export interface InitialDataType {
  users: {
    active: number;
    inactive: number;
    total: number;
  };
  revenue: {
    subscriptions: number;
    advertisements: number;
    onetime: number;
  };
  streams: {
    total: string;
    topArtist: string;
  };
  recentStreams: {
    userId: string;
    songName: string;
    artist: string;
    dateStreamed: string;
    streamCount: number;
  }[];
  userGrowth: {
    labels: string[];
    data: number[];
  };
  topSongs: {
    labels: string[];
    data: number[];
  };

} 