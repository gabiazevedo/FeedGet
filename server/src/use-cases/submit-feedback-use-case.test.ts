// Suite de testes para o caso de uso de Submissão de um novo feedback

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

/*
Nas linhas 15 e 16 temos una instância do caso de uso SubmitFeedback criada,
só que as dependências de SubmitFeedback estão mockadas,
passei dependências fake, simulei o comportamento das dependências reais,
porque nosso objetivo não é testar as dependência, mas sim, o caso de uso
*/

/*
Nas linhas 23 à 27 dizemos que esperamos que o método execute da instância SubmitFeedbackUseCase receba estes parâmetros e
retorne uma promise resolvida, sem disparo de erros.
*/

// spies - espiões - asseguram que as funções testadas foram realmente chamadas

const createFeedbackSpy = jest.fn(); // função espiã
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => { // describe - vários testes pra uma única funcionalidade
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,hdfsdhfiauhfndaivfeadfnai',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submmit feedback without a type', async () => { 
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64,hdfsdhfiauhfndaivfeadfnai',
    })).rejects.toThrow(); 
  });

  it('should not be able to submmit feedback without a comment', async () => { 
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,hdfsdhfiauhfndaivfeadfnai',
    })).rejects.toThrow(); 
  });

  it('should not be able to submmit feedback with an invalid screenshot format', async () => { 
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow(); 
  });

});

test('sum 2 + 2', () => {
  expect(2 + 2).toBe(4);
});