SELECT MAX(ot_kilometraje),MIN(ot_kilometraje),ROUND(AVG(ot_kilometraje),2) FROM tbl_orden_trabajo
ALTER TABLE `tbl_orden_trabajo`
	ADD COLUMN `ot_activo` CHAR(1) NULL DEFAULT '1' AFTER `ot_observacion`

	SELECT * FROM tbl_orden_trabajo
WHERE ot_activo = '1';

UPDATE tbl_orden_trabajo SET ot_activo = '0'
WHERE ot_id = 7;

SELECT ot.ot_vehiculo_id,v.vehiculo_placa,v.vehiculo_tipo
FROM tbl_orden_trabajo ot
LEFT JOIN tbl_vehiculo v ON ot.ot_vehiculo_id = v.vehiculo_id;

INSERT INTO tbl_orden_trabajo(ot_nro) VALUES ('9999')

INSERT INTO tbl_vehiculo(vehiculo_placa) VALUES('RRG-777')