SELECT t.tipo FROM tbl_orden_trabajo t WHERE t.placa = 'APD-222' ORDER BY t.ot_id DESC LIMIT 1

CREATE TABLE tbl_tipo_mtto (tipo_mtto_id INT AUTO_INCREMENT PRIMARY KEY) AS 
SELECT DISTINCT tipo_mtto AS tipo_mtto_nombre
FROM tbl_orden_trabajo
WHERE tipo_mtto IS NOT NULL;

CREATE TABLE tbl_tipo_ot (tipo_ot_id INT AUTO_INCREMENT PRIMARY KEY) AS 
SELECT DISTINCT tipo_ot AS tipo_ot_nombre
FROM tbl_orden_trabajo
WHERE tipo_ot IS NOT NULL;

CREATE TABLE tbl_ciudad AS
SELECT distinct ciudad AS ciudad_nombre FROM tbl_orden_trabajo
ORDER BY ciudad ASC;
ALTER TABLE tbl_ciudad
ADD ciudad_id INT(11) PRIMARY KEY AUTO_INCREMENT FIRST;

SELECT t.ot_ciudad_id,t.ciudad,
(SELECT c.ciudad_id FROM tbl_ciudad c WHERE c.ciudad_nombre = t.ciudad)
FROM tbl_orden_trabajo t;
UPDATE tbl_orden_trabajo t
SET t.ot_ciudad_id = (SELECT c.ciudad_id FROM tbl_ciudad c WHERE c.ciudad_nombre = t.ciudad);

SELECT t.ot_tipo_mtto_id,t.tipo_mtto,
(SELECT c.tipo_mtto_id FROM tbl_tipo_mtto c WHERE c.tipo_mtto_nombre = t.tipo_mtto)
FROM tbl_orden_trabajo t;
UPDATE tbl_orden_trabajo t
SET t.ot_tipo_mtto_id = (SELECT c.tipo_mtto_id FROM tbl_tipo_mtto c WHERE c.tipo_mtto_nombre = t.tipo_mtto)
WHERE t.tipo_mtto IS NOT NULL;

ALTER TABLE tbl_orden_trabajo
	ADD CONSTRAINT fk_ot_tipo_ot_id FOREIGN KEY (ot_tipo_ot_id) REFERENCES tbl_tipo_ot (tipo_ot_id);
ALTER TABLE tbl_orden_trabajo
	ADD CONSTRAINT `fk_ot_vehiculo_id` FOREIGN KEY (`ot_vehiculo_id`) REFERENCES `tbl_vehiculo` (`vehiculo_id`);
ALTER TABLE tbl_orden_trabajo
	ADD CONSTRAINT `fk_ot_tipo_mtto_id` FOREIGN KEY (`ot_tipo_mtto_id`) REFERENCES `tbl_tipo_mtto` (`tipo_mtto_id`);