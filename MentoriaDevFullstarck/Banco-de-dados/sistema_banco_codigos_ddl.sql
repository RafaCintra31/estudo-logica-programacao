-- DDL

-- Mostrar a tabela
SELECT * FROM contas c;
SELECT * FROM pessoas p;
SELECT * FROM eventos_conta ec;

-- Adicionar UNIQUE na tabela
ALTER TABLE pessoas
ADD UNIQUE (documento)
ALTER TABLE contas
ADD UNIQUE (numero)

-- Modificar coluna especifica
ALTER TABLE pessoas
MODIFY COLUMN documento VARCHAR(14)
ALTER TABLE contas 
MODIFY saldo DECIMAL(15,2);

-- Adicionar nova coluna
ALTER TABLE pessoas
ADD COLUMN telefone VARCHAR(15)
ALTER TABLE eventos_conta 
ADD COLUMN valor DECIMAL(11,2);

-- Alterar nome da coluna
ALTER TABLE pessoas
CHANGE COLUMN nome nome_completo VARCHAR(100)

-- Apagar coluna da tabela
ALTER TABLE pessoas
DROP COLUMN telefone;
ALTER TABLE pessoas 
DROP COLUMN enderecos;

-- Fomato padrão UPTADE -> UPDATE (NOME TABELA)
-- Sempre usar como base valores unicos.
-- Evitar UPDATE sem WHERE (para não alterar a tabela inteira)
-- Formato SET -> SET (NOME COLUNA = (VALOR ALTERADO)
--         WHERE (NOME COLUNA) = (PARAMETRO DE REFERENCIA)
UPDATE pessoas p
SET nome = 'joao silva'
WHERE documento = '12345678901'

UPDATE pessoas p
SET documento = '11122233344'
WHERE id = 2

UPDATE pessoas p
SET nome = 'Carlos Mendes'
WHERE email = 'carlos.mendes@email.com'

UPDATE pessoas p
SET nome = 'Maria Oliveira'
WHERE id = 2

UPDATE contas c
SET saldo = 5500
WHERE id = 3

UPDATE contas c
SET saldo = 4000
WHERE numero = 1004

UPDATE contas c
SET numero = 1001
WHERE id = 2

-- Label
SELECT 
    p.nome AS 'nome pessoa'
    p.documento AS 'doc pessoa'
FROM pessoas p;

-- Selecionando informações 
SELECT * FROM pessoas p WHERE p.nome = 'Maria';
SELECT * FROM pessoas p WHERE p.id = 22;

-- Verifica se um valor está presente dentro de uma lista de valores.
SELECT * FROM pessoas p WHERE p. id IN (1, 13, 22);

-- Usado para filtrar valores dentro de um intervalo (inclusive os limites).
SELECT * FROM pessoas p WHERE p.id BETWEEN 20 AND 30;

-- Usado para buscar padrões de texto (normalmente com % ou _).
SELECT * FROM pessoas p WHERE p.nome LIKE '%O'
SELECT * FROM pessoas p WHERE p.nome LIKE 'R%'
SELECT * FROM pessoas p WHERE p.nome LIKE '%RI%'

-- Buscando se tem documento nulo
SELECT * FROM pessoas w WHERE w.documento IS NULL;

-- Ordena os resultados por uma ou mais colunas.
SELECT * FROM eventos_conta ec 
WHERE (ec.operacao = 'SAQUE' AND
       ec.valor > 100) OR 
      (ec.operacao = 'DEPOSITO' AND
       ec.valor < 100)
ORDER BY ec.id ASC;

-- Crescente -> ASC
-- Decrescente -> DESC

-- Conta o número de registros (linhas).
SELECT COUNT(c.id) AS 'total contas'
FROM contas c;

-- Soma os valores de uma coluna numérica.
SELECT SUM(c.saldo) FROM contas c
WHERE c.data_criacao
BETWEEN '2025-05-30 00:00:00' AND '2025-05-31 23:59:59';

-- Retorna o menor valor de uma coluna e Retorna o maior valor de uma coluna.
SELECT MIN(c.saldo) FROM contas c;
SELECT MAX (c.saldo) FROM contas c;

-- INFORMAÇÕES IMPORTANTES
-- NÃO SE PODE USAR MAIS QUE 1 WHERE