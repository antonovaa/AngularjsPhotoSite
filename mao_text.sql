-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 13, 2016 at 08:14 PM
-- Server version: 5.5.45
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mao-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `mao_text`
--

CREATE TABLE IF NOT EXISTS mao_text (
  IID serial primary key,
  txt text NOT NULL
)

--
-- Dumping data for table `mao_text`
--

INSERT INTO mao_text ( txt) VALUES
('Всякий, кто стремится поживиться на чужой счёт, обязательно кончает плохо!'),
('То, что мыслимо, то осуществимо.'),
('У каждого поколения должна быть своя война.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
