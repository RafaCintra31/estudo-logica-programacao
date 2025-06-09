-- Precisamos exibir:
-- nme cliente, tabela pessoas
-- numero conta, tabela conta
-- operacao, tabela eventos_conta
-- valor, tabela eventos_conta
-- Somente depositos

SELECT p.nome,
       c.numero,
       ec.operacao,
       ec.valor
FROM pessoas p
    INNER JOIN contas c ON (p.id = c.id_pessoa)
    INNER JOIN eventos_conta ec ON (c.id = ec.id_conta)
WHERE ec.operacao = 'DEPOSITO';

INSERT INTO sistema_banco.pessoas
(nome, data_nascimento, documento, email)
VALUES('Rafa', '2005-07-31', '52277475041', 'rafa@mail.com')

SELECT * FROM pessoas p WHERE p.id = 23;
SELECT * FROM contas c WHERE c.id_pessoa = 23;

SELECT p.nome       AS 'nm_cliente', 
       c.numero     AS 'nr_conta'
    FROM pessoas p INNER JOIN contas c ON (p.id = c.id_pessoa);

SELECT p.nome       AS 'nm_cliente', 
       c.numero     AS 'nr_conta'
    FROM pessoas p LEFT JOIN contas c ON (p.id = c.id_pessoa); 