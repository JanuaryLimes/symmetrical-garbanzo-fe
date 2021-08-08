import { axiosInstance } from "@/lib/axios";

type CreateShortlinkData = {
  data: {
    url: string;
  };
};

type ShortlinkApiDto = {
  shortUrl: string;
};

class Shortlink {
  constructor(public readonly shortUrl: string) {}
  static fromJson(json: ShortlinkApiDto) {
    return new Shortlink(json.shortUrl);
  }
}

export function createShortlink({
  data,
}: CreateShortlinkData): Promise<Shortlink> {
  return axiosInstance
    .post<CreateShortlinkData, ShortlinkApiDto>("/api/link/shorten", data)
    .then(Shortlink.fromJson);
}
