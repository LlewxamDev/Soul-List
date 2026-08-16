import { fetchJson } from "../../core/utils/http";

interface ViaCepResponse {
  erro?: boolean;
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

export class LocationService {
  public async lookupCep(input: string): Promise<ViaCepResponse> {
    const cep = input.replace(/\D/g, "");
    if (!/^\d{8}$/.test(cep)) {
      throw new Error("CEP inválido.");
    }
    const response = await fetchJson<ViaCepResponse>(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.erro || !response.cep) {
      throw new Error("CEP não encontrado.");
    }
    return response;
  }
}
