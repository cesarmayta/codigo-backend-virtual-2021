/********* CREAR LA VISTA *************/
ALTER ALGORITHM = UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vw_total_ot` AS SELECT
v.vehiculo_placa AS placa,COUNT(ot.ot_id) AS total_reg FROM tbl_orden_trabajo ot
INNER JOIN tbl_vehiculo v ON ot.ot_vehiculo_id = v.vehiculo_id
GROUP BY v.vehiculo_placa  ;

/********* CREAR  EL PROCEDIMIENTO *************/
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_total_ot_placa`(
	IN `strPlaca` VARCHAR(100),
	OUT `intTotal` INT
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT 'procedimiento que devuelve el total de ordenes de trabajo de un placa'
BEGIN
	SELECT total_reg INTO intTotal FROM vw_total_ot WHERE placa = strPlaca;
END

/********* PARA PROBAR LA VISTA Y EL PROCEDIMIENTO *************/
SELECT placa,total_reg FROM vw_total_ot;
CALL sp_total_ot_placa('D1Y-444',@tplaca);
SELECT @tplaca;