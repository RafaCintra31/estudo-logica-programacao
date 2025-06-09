DROP DATABASE sistema_banco;
CREATE DATABASE sistema_banco;

USE sistema_banco;

DROP TABLE IF EXISTS eventos_conta;
DROP TABLE IF EXISTS contas;
DROP TABLE IF EXISTS pessoas;

CREATE TABLE pessoas (
    id 					BIGINT 			NOT NULL AUTO_INCREMENT 			,
    nome 				VARCHAR(100) 	NOT NULL							,
    data_nascimento 	DATE 			NOT NULL							,
    documento 			VARCHAR(11) 	NOT NULL							,
    data_criacao 		TIMESTAMP 		NOT NULL 							,
    email				VARCHAR(255)	NOT NULL UNIQUE						,
    PRIMARY KEY (id)
);

CREATE TABLE contas(
	id					BIGINT			NOT NULL AUTO_INCREMENT ,
	nome				VARCHAR(100)	NOT NULL				,
	numero				BIGINT			NOT NULL				,
	saldo				DECIMAL(14,2)   NOT NULL DEFAULT 0		,
	data_criacao		TIMESTAMP		NOT NULL DEFAULT NOW()	,
	id_pessoa			BIGINT			NOT NULL				,
	PRIMARY KEY(id)												,
	CONSTRAINT fk_contas_pessoas FOREIGN KEY(id_pessoa) REFERENCES pessoas(id)
);

CREATE TABLE eventos_conta (
    id					BIGINT													NOT NULL AUTO_INCREMENT ,
	operacao			ENUM('SAQUE', 'DEPOSITO', 'TRANSFERENCIA', 'CADASTRO')	NOT NULL				,
    data_criacao        TIMESTAMP                                               NOT NULL                ,    
    id_conta            BIGINT                                                  NOT NULL                ,
	PRIMARY KEY(id)																						,
	CONSTRAINT fk_eventos_conta_pessoas FOREIGN KEY(id_conta) REFERENCES contas(id)
);
