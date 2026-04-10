import { fetchJson } from "../../core/utils/http";

interface WeatherPayload {
  current_condition: Array<{
    temp_C: string;
    weatherDesc: Array<{ value: string }>;
    humidity: string;
    FeelsLikeC: string;
  }>;
}

export class WeatherService {
  public async current(location: string) {
    const url = `https://wttr.in/${encodeURIComponent(location)}?format=j1`;
    const payload = await fetchJson<WeatherPayload>(url);
    const current = payload.current_condition[0];
    return {
      location,
      temperatureC: current?.temp_C ?? "?",
      feelsLikeC: current?.FeelsLikeC ?? "?",
      description: current?.weatherDesc[0]?.value ?? "Sem descrição",
      humidity: current?.humidity ?? "?"
    };
  }
}
