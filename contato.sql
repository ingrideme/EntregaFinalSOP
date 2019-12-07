CREATE TABLE IF NOT EXISTS cadastramento.contato ( 
`id` INT(11) NOT NULL AUTO_INCREMENT , 
`nome` VARCHAR(50) NOT NULL , 
`telefone` VARCHAR(11) NULL , 
`email` VARCHAR(50) NOT NULL ,
`cidade` VARCHAR(11) NOT NULL ,
PRIMARY KEY (`id`)
) 
ENGINE = InnoDB;