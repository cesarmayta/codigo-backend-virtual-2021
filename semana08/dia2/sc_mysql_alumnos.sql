-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para codigo
CREATE DATABASE IF NOT EXISTS `codigo` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `codigo`;

-- Volcando estructura para tabla codigo.alumnos
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pais` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Volcando datos para la tabla codigo.alumnos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` (`id`, `nombre`, `email`, `pais`) VALUES
	(1, 'Katee', 'ksellwood0@privacy.gov.au', 'Peru'),
	(2, 'Parsifal', 'pduplantier1@ft.com', 'Brazil'),
	(3, 'Fanya', 'fdyson2@gravatar.com', 'Brazil'),
	(4, 'Dyane', 'dbewick3@linkedin.com', 'Peru'),
	(5, 'Mirilla', 'mstoke4@bizjournals.com', 'Peru'),
	(6, 'Lenka', 'lbrack5@privacy.gov.au', 'Colombia'),
	(7, 'Trever', 'tfriel6@ning.com', 'Brazil'),
	(8, 'Gabriel', 'gcicchitello7@angelfire.com', 'Brazil'),
	(9, 'Eleanore', 'egostyke8@usnews.com', 'Brazil'),
	(10, 'Virge', 'vhorder9@ox.ac.uk', 'Colombia'),
	(11, 'Dannye', 'dkitsona@t-online.de', 'Brazil'),
	(12, 'Anstice', 'abraxayb@vistaprint.com', 'Chile'),
	(13, 'Ann', 'apeiroc@upenn.edu', 'Peru'),
	(14, 'Kira', 'komahonyd@sciencedaily.com', 'Peru'),
	(15, 'Jan', 'jrawsthornee@bluehost.com', 'Colombia'),
	(16, 'Stanislaw', 'slinnemanf@loc.gov', 'Colombia'),
	(17, 'Cosmo', 'ccampanag@google.es', 'Colombia'),
	(18, 'Tracie', 'tpinwillh@nifty.com', 'Colombia'),
	(19, 'Lelia', 'lgouldthorpei@google.com.hk', 'Brazil'),
	(20, 'Don', 'derreyj@shinystat.com', 'Bolivia'),
	(21, 'Claus', 'cjayek@vistaprint.com', 'Brazil'),
	(22, 'Jenelle', 'jhealdl@about.me', 'Brazil'),
	(23, 'Jonathon', 'jschoberm@people.com.cn', 'Brazil'),
	(24, 'Brodie', 'bkynmann@blinklist.com', 'Brazil'),
	(25, 'Trudie', 'twoolletto@facebook.com', 'Chile'),
	(26, 'Daphna', 'dpieperp@fema.gov', 'Peru'),
	(27, 'Perl', 'pgrahamq@yelp.com', 'Brazil'),
	(28, 'Allene', 'awhilderr@netvibes.com', 'Colombia'),
	(29, 'Trixie', 'tkembleys@netvibes.com', 'Brazil'),
	(30, 'Neale', 'npardit@deliciousdays.com', 'Brazil'),
	(31, 'Ephrem', 'egerrensu@newsvine.com', 'Brazil'),
	(32, 'Darcey', 'dpietzkerv@bizjournals.com', 'Brazil'),
	(33, 'Gael', 'gmcgahernw@ca.gov', 'Brazil'),
	(34, 'Kathleen', 'kmacgorleyx@timesonline.co.uk', 'Peru'),
	(35, 'Laetitia', 'lgyurkovicsy@ifeng.com', 'Colombia'),
	(36, 'Ian', 'iwingerz@shinystat.com', 'Colombia'),
	(37, 'Janeczka', 'jrustan10@foxnews.com', 'Brazil'),
	(38, 'Luce', 'lchason11@gmpg.org', 'Colombia'),
	(39, 'Bell', 'btortis12@theglobeandmail.com', 'Bolivia'),
	(40, 'Corny', 'crichichi13@webnode.com', 'Brazil'),
	(41, 'Vinnie', 'vdoche14@google.co.uk', 'Brazil'),
	(42, 'Kessiah', 'ksturges15@artisteer.com', 'Brazil'),
	(43, 'Jere', 'jdakers16@gov.uk', 'Peru'),
	(44, 'Ardath', 'agillebert17@narod.ru', 'Brazil'),
	(45, 'Aldis', 'ashilburne18@squarespace.com', 'Ecuador'),
	(46, 'Dino', 'dbrownsall19@reuters.com', 'Brazil'),
	(47, 'Darleen', 'ddoddemeede1a@ycombinator.com', 'Brazil'),
	(48, 'Stace', 'sczapla1b@europa.eu', 'Brazil'),
	(49, 'Pedro', 'pramplee1c@epa.gov', 'Bolivia'),
	(50, 'Mariya', 'mhuggill1d@goo.ne.jp', 'Brazil'),
	(51, 'Abbe', 'akienzle1e@ca.gov', 'Colombia'),
	(52, 'Glyn', 'gkenner1f@nbcnews.com', 'Brazil'),
	(53, 'Burr', 'bhalley1g@ox.ac.uk', 'Peru'),
	(54, 'Luke', 'ltootin1h@privacy.gov.au', 'Brazil'),
	(55, 'Camella', 'cbacop1i@harvard.edu', 'Chile'),
	(56, 'Ev', 'eorwell1j@soundcloud.com', 'Peru'),
	(57, 'Duke', 'dearngy1k@dell.com', 'Peru'),
	(58, 'Alvinia', 'alantiff1l@cbslocal.com', 'Colombia'),
	(59, 'Bartel', 'bcomerford1m@squidoo.com', 'Peru'),
	(60, 'Shanna', 'scorking1n@networksolutions.com', 'Ecuador'),
	(61, 'Appolonia', 'agarlick1o@feedburner.com', 'Brazil'),
	(62, 'Amalee', 'ahitchens1p@edublogs.org', 'Brazil'),
	(63, 'Don', 'dmattock1q@networkadvertising.org', 'Peru'),
	(64, 'Aldo', 'adhooge1r@virginia.edu', 'Brazil'),
	(65, 'Cobb', 'chackleton1s@cyberchimps.com', 'Peru'),
	(66, 'Deb', 'dlambal1t@salon.com', 'Brazil'),
	(67, 'Alexia', 'asuthworth1u@reuters.com', 'Brazil'),
	(68, 'Parke', 'pdulling1v@hp.com', 'Brazil'),
	(69, 'Dwight', 'dion1w@engadget.com', 'Chile'),
	(70, 'Nona', 'nsavary1x@apple.com', 'Peru'),
	(71, 'Dayna', 'dbernollet1y@weebly.com', 'Peru'),
	(72, 'Charmane', 'cworsalls1z@ed.gov', 'Colombia'),
	(73, 'Petr', 'prenard20@clickbank.net', 'Colombia'),
	(74, 'Stanleigh', 'swreath21@rambler.ru', 'Colombia'),
	(75, 'Lazarus', 'ldeluce22@adobe.com', 'Peru'),
	(76, 'Donnamarie', 'dparken23@timesonline.co.uk', 'Peru'),
	(77, 'Griselda', 'gocahill24@goodreads.com', 'Bolivia'),
	(78, 'Leigh', 'lchantler25@cbsnews.com', 'Brazil'),
	(79, 'Emelyne', 'ecoultass26@reddit.com', 'Brazil'),
	(80, 'Conny', 'clambell27@ft.com', 'Brazil'),
	(81, 'Timmi', 'tmccorkindale28@theglobeandmail.com', 'Peru'),
	(82, 'Daniella', 'dcaville29@who.int', 'Chile'),
	(83, 'Simonne', 'sglyn2a@histats.com', 'Brazil'),
	(84, 'Charmine', 'ccroan2b@blog.com', 'Colombia'),
	(85, 'Corry', 'civanyukov2c@nyu.edu', 'Brazil'),
	(86, 'Mahalia', 'mduckering2d@google.fr', 'Brazil'),
	(87, 'Kylynn', 'kfransman2e@etsy.com', 'Colombia'),
	(88, 'Chrissy', 'cmccurdy2f@netlog.com', 'Peru'),
	(89, 'Xena', 'xhellings2g@networksolutions.com', 'Brazil'),
	(90, 'Frederich', 'fmaccorkell2h@oakley.com', 'Brazil'),
	(91, 'Stephen', 'sleask2i@cnn.com', 'Peru'),
	(92, 'Iris', 'icanto2j@sohu.com', 'Colombia'),
	(93, 'Tally', 'temlyn2k@foxnews.com', 'Peru'),
	(94, 'Swen', 'slevane2l@prlog.org', 'Brazil'),
	(95, 'Neely', 'nmackessock2m@who.int', 'Chile'),
	(96, 'Illa', 'istredder2n@purevolume.com', 'Peru'),
	(97, 'Amil', 'atravis2o@admin.ch', 'Brazil'),
	(98, 'Gonzalo', 'gfarrow2p@loc.gov', 'Brazil'),
	(99, 'Korey', 'kgorring2q@wordpress.com', 'Peru'),
	(100, 'Vincenz', 'vlawee2r@sitemeter.com', 'Brazil');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
