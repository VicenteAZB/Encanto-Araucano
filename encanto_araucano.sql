-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2023 a las 21:22:04
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encanto araucano`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centros comerciales`
--

CREATE TABLE `centros comerciales` (
  `idcentrocomercial` int(11) NOT NULL,
  `nomcentrocomercial` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cocina mapuche`
--

CREATE TABLE `cocina mapuche` (
  `idcocinamapuche` int(11) NOT NULL,
  `nomcocinamapuche` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `idcomuna` int(11) NOT NULL,
  `nombrecomuna` varchar(32) DEFAULT NULL,
  `provinciacomuna` varchar(12) DEFAULT NULL,
  `idcultura` int(11) DEFAULT NULL,
  `idgastronomia` int(11) DEFAULT NULL,
  `identretenimiento` int(11) DEFAULT NULL,
  `iddestino` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costa araucania`
--

CREATE TABLE `costa araucania` (
  `idcostaaraucania` int(11) NOT NULL,
  `nomcostaaraucania` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cultura`
--

CREATE TABLE `cultura` (
  `idcultura` int(11) NOT NULL,
  `idmuseo` int(11) DEFAULT NULL,
  `idsitioemblematico` int(11) DEFAULT NULL,
  `idmonumento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinos`
--

CREATE TABLE `destinos` (
  `iddestino` int(11) NOT NULL,
  `idparquesnacional` int(11) DEFAULT NULL,
  `idcostaaraucania` int(11) DEFAULT NULL,
  `idpaisajesnatural` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entretenimiento`
--

CREATE TABLE `entretenimiento` (
  `identretenimiento` int(11) NOT NULL,
  `idcentrocomercial` int(11) DEFAULT NULL,
  `identrecreativo` int(11) DEFAULT NULL,
  `identartistico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entretenimiento artistico`
--

CREATE TABLE `entretenimiento artistico` (
  `identrecreativo` int(11) NOT NULL,
  `nomentrecreativo` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entretenimiento recreatico`
--

CREATE TABLE `entretenimiento recreatico` (
  `identrecreativo` int(11) NOT NULL,
  `nomentrecreativo` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ferias costumbristas`
--

CREATE TABLE `ferias costumbristas` (
  `idferiacostumbrista` int(11) NOT NULL,
  `nomferiacostumbrisa` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastronomia`
--

CREATE TABLE `gastronomia` (
  `idgastronomia` int(11) NOT NULL,
  `idrestaurante` int(11) DEFAULT NULL,
  `idferiacostumbrista` int(11) DEFAULT NULL,
  `idcocinamapuche` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inicio sesión`
--

CREATE TABLE `inicio sesión` (
  `idsesion` varchar(24) NOT NULL,
  `correo` varchar(64) DEFAULT NULL,
  `contraseña` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monumentos`
--

CREATE TABLE `monumentos` (
  `idmonumento` int(11) NOT NULL,
  `nommonumento` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `museos`
--

CREATE TABLE `museos` (
  `idmuseo` int(11) NOT NULL,
  `nommuseo` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paisajes naturales`
--

CREATE TABLE `paisajes naturales` (
  `idpaisajenatural` int(11) NOT NULL,
  `nompaisajenatural` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parques nacionales`
--

CREATE TABLE `parques nacionales` (
  `idparquenacional` int(11) NOT NULL,
  `nomparquenacional` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `idusuario` int(11) NOT NULL,
  `correo` varchar(64) DEFAULT NULL,
  `contraseña` varchar(24) DEFAULT NULL,
  `nombre` varchar(24) DEFAULT NULL,
  `apepat` varchar(24) DEFAULT NULL,
  `apemat` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseñas`
--

CREATE TABLE `reseñas` (
  `idreseña` int(11) NOT NULL,
  `reseña` varchar(260) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL,
  `idsesion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurantes`
--

CREATE TABLE `restaurantes` (
  `idrestaurante` int(11) NOT NULL,
  `nomrestaurante` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitios emblematicos`
--

CREATE TABLE `sitios emblematicos` (
  `idsitioemblematico` int(11) NOT NULL,
  `nomsitioemblematico` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `centros comerciales`
--
ALTER TABLE `centros comerciales`
  ADD PRIMARY KEY (`idcentrocomercial`);

--
-- Indices de la tabla `cocina mapuche`
--
ALTER TABLE `cocina mapuche`
  ADD PRIMARY KEY (`idcocinamapuche`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`idcomuna`);

--
-- Indices de la tabla `costa araucania`
--
ALTER TABLE `costa araucania`
  ADD PRIMARY KEY (`idcostaaraucania`);

--
-- Indices de la tabla `cultura`
--
ALTER TABLE `cultura`
  ADD PRIMARY KEY (`idcultura`),
  ADD KEY `idmuseo` (`idmuseo`);

--
-- Indices de la tabla `destinos`
--
ALTER TABLE `destinos`
  ADD PRIMARY KEY (`iddestino`);

--
-- Indices de la tabla `entretenimiento`
--
ALTER TABLE `entretenimiento`
  ADD PRIMARY KEY (`identretenimiento`),
  ADD KEY `idcentrocomercial` (`idcentrocomercial`),
  ADD KEY `identrecreativo` (`identrecreativo`),
  ADD KEY `identartistico` (`identartistico`);

--
-- Indices de la tabla `entretenimiento artistico`
--
ALTER TABLE `entretenimiento artistico`
  ADD PRIMARY KEY (`identrecreativo`);

--
-- Indices de la tabla `entretenimiento recreatico`
--
ALTER TABLE `entretenimiento recreatico`
  ADD PRIMARY KEY (`identrecreativo`);

--
-- Indices de la tabla `ferias costumbristas`
--
ALTER TABLE `ferias costumbristas`
  ADD PRIMARY KEY (`idferiacostumbrista`);

--
-- Indices de la tabla `gastronomia`
--
ALTER TABLE `gastronomia`
  ADD PRIMARY KEY (`idgastronomia`);

--
-- Indices de la tabla `inicio sesión`
--
ALTER TABLE `inicio sesión`
  ADD PRIMARY KEY (`idsesion`);

--
-- Indices de la tabla `monumentos`
--
ALTER TABLE `monumentos`
  ADD PRIMARY KEY (`idmonumento`);

--
-- Indices de la tabla `museos`
--
ALTER TABLE `museos`
  ADD PRIMARY KEY (`idmuseo`);

--
-- Indices de la tabla `paisajes naturales`
--
ALTER TABLE `paisajes naturales`
  ADD PRIMARY KEY (`idpaisajenatural`);

--
-- Indices de la tabla `parques nacionales`
--
ALTER TABLE `parques nacionales`
  ADD PRIMARY KEY (`idparquenacional`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`idusuario`);

--
-- Indices de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD PRIMARY KEY (`idreseña`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `restaurantes`
--
ALTER TABLE `restaurantes`
  ADD PRIMARY KEY (`idrestaurante`);

--
-- Indices de la tabla `sitios emblematicos`
--
ALTER TABLE `sitios emblematicos`
  ADD PRIMARY KEY (`idsitioemblematico`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cultura`
--
ALTER TABLE `cultura`
  ADD CONSTRAINT `cultura_ibfk_1` FOREIGN KEY (`idmuseo`) REFERENCES `museos` (`idmuseo`);

--
-- Filtros para la tabla `entretenimiento`
--
ALTER TABLE `entretenimiento`
  ADD CONSTRAINT `entretenimiento_ibfk_1` FOREIGN KEY (`idcentrocomercial`) REFERENCES `centros comerciales` (`idcentrocomercial`),
  ADD CONSTRAINT `entretenimiento_ibfk_2` FOREIGN KEY (`identrecreativo`) REFERENCES `entretenimiento recreatico` (`identrecreativo`),
  ADD CONSTRAINT `entretenimiento_ibfk_3` FOREIGN KEY (`identartistico`) REFERENCES `entretenimiento artistico` (`identrecreativo`);

--
-- Filtros para la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD CONSTRAINT `reseñas_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `registro` (`idusuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
