export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string; // a ? é para sinalizar que essa propriedade é opcional na criação de um novo feddback
} // interface que pertence a camada de dados da aplicação

// contrato - vai dizer para a aplicação (rotas, casos de uso) quais são as operações que podemos realizar no banco de dados,
// mas ele não vai implementar essas operações
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}