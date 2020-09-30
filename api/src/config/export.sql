-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 30, 2020 at 09:46 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `quizz`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `label` varchar(240) NOT NULL,
  `is_correct` tinyint(1) NOT NULL DEFAULT '0',
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `label`, `is_correct`, `question_id`) VALUES
(1, 'Soleil', 1, 1),
(2, 'Pluie', 0, 1),
(3, 'bleu', 1, 2),
(4, 'Rouge', 0, 2),
(5, 'Jaune', 0, 2),
(6, 'Vert', 0, 2),
(7, 'An event listener is a procedure or function in a computer program that waits for an event to occur.', 1, 8),
(8, 'Une fonction j\'avascript', 0, 8),
(11, 'Une librairie Javascript', 0, 8),
(12, 'Une librairie Css', 0, 8),
(13, 'Peut être', 0, 5),
(14, 'Non', 0, 5),
(15, 'Oui', 1, 5),
(16, 'Cascading style sheet', 1, 6),
(19, 'Custom serial sheet', 0, 6),
(20, 'Custom several sheet', 0, 6),
(21, 'Document object model ', 1, 7),
(22, 'Lorem ipsum lera respon ajdu', 0, 7),
(23, 'Lorem Ipsum is simply dummy', 0, 7),
(24, 'Lorem Ipsum is simply dummy', 0, 7),
(25, 'A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph', 1, 10),
(26, 'Un pseudo élément est attribut d\'un élément HMTL', 0, 10),
(27, 'Un pseudo élément est un faux élément du DOM', 0, 10),
(28, 'C\'est une librairie Javascript', 0, 10),
(29, 'Typescript', 0, 12),
(30, 'Redux', 1, 12),
(31, 'Vuejs', 0, 12),
(32, 'Angular', 0, 12),
(33, 'Oui', 1, 9),
(34, 'Non', 0, 9),
(35, 'Peut être', 0, 9),
(36, 'Certainement pas ', 0, 9),
(37, 'Aucune, ces deux méthodes sont identiques', 0, 11),
(38, 'La méthode Array.forEach retourne un nouveau tableau', 0, 11),
(39, 'La méthode Array.map retourne un nouveau tableau', 1, 11),
(40, 'La méthode Array.forEach est plus rapide  que la méthode Array.map', 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `label` varchar(240) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `label`) VALUES
(1, 'HTML'),
(2, 'CSS'),
(3, 'JS');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `current_question` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `played_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `steps` int(11) NOT NULL DEFAULT '0',
  `mode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `player_id`, `current_question`, `score`, `played_at`, `steps`, `mode`) VALUES
(445, 5, 9, 3, '2020-06-26 11:48:51', 3, 2),
(446, 5, 12, 0, '2020-06-26 11:49:36', 2, 2),
(447, 6, 9, 2, '2020-06-26 12:31:46', 3, 2),
(448, 6, 8, 1, '2020-06-26 12:38:28', 1, 1),
(449, 6, 12, 5, '2020-06-26 12:40:12', 9, 1),
(450, 6, 12, 1, '2020-06-26 12:43:30', 2, 2),
(451, 6, 6, 0, '2020-06-26 12:44:13', 1, 2),
(452, 6, 12, 0, '2020-06-26 12:44:51', 0, 1),
(453, 6, 1, 0, '2020-06-26 12:45:57', 0, 2),
(454, 6, 6, 0, '2020-06-26 12:48:22', 1, 2),
(455, 6, 12, 0, '2020-06-26 12:49:26', 1, 2),
(456, 5, 12, 0, '2020-06-26 12:53:13', 0, 1),
(457, 5, 1, 0, '2020-06-26 12:53:16', 0, 1),
(458, 5, 11, 0, '2020-06-26 12:53:19', 0, 1),
(459, 5, 11, 0, '2020-06-26 12:53:21', 0, 1),
(460, 5, 11, 0, '2020-06-26 12:53:23', 0, 1),
(461, 5, 7, 0, '2020-06-26 12:53:25', 0, 1),
(462, 5, 8, 3, '2020-09-30 08:23:12', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `game_has_questions`
--

CREATE TABLE `game_has_questions` (
  `game_id` int(11) NOT NULL,
  `questions_id` int(11) NOT NULL,
  `choice_type` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `game_has_questions`
--

INSERT INTO `game_has_questions` (`game_id`, `questions_id`, `choice_type`, `created_at`) VALUES
(445, 2, NULL, '2020-06-26 11:48:51'),
(445, 5, NULL, '2020-06-26 11:48:51'),
(445, 7, NULL, '2020-06-26 11:48:51'),
(445, 9, NULL, '2020-06-26 11:48:51'),
(446, 8, NULL, '2020-06-26 11:49:36'),
(446, 11, NULL, '2020-06-26 11:49:36'),
(446, 12, NULL, '2020-06-26 11:49:36'),
(447, 2, NULL, '2020-06-26 12:31:46'),
(447, 5, NULL, '2020-06-26 12:31:46'),
(447, 7, NULL, '2020-06-26 12:31:46'),
(447, 9, NULL, '2020-06-26 12:31:46'),
(448, 1, NULL, '2020-06-26 12:38:28'),
(448, 2, NULL, '2020-06-26 12:38:28'),
(448, 5, NULL, '2020-06-26 12:38:28'),
(448, 6, NULL, '2020-06-26 12:38:28'),
(448, 7, NULL, '2020-06-26 12:38:28'),
(448, 8, NULL, '2020-06-26 12:38:28'),
(448, 9, NULL, '2020-06-26 12:38:28'),
(448, 10, NULL, '2020-06-26 12:38:28'),
(448, 11, NULL, '2020-06-26 12:38:28'),
(448, 12, NULL, '2020-06-26 12:38:28'),
(449, 1, NULL, '2020-06-26 12:40:12'),
(449, 2, NULL, '2020-06-26 12:40:12'),
(449, 5, NULL, '2020-06-26 12:40:12'),
(449, 6, NULL, '2020-06-26 12:40:12'),
(449, 7, NULL, '2020-06-26 12:40:12'),
(449, 8, NULL, '2020-06-26 12:40:12'),
(449, 9, NULL, '2020-06-26 12:40:12'),
(449, 10, NULL, '2020-06-26 12:40:12'),
(449, 11, NULL, '2020-06-26 12:40:12'),
(449, 12, NULL, '2020-06-26 12:40:12'),
(450, 8, NULL, '2020-06-26 12:43:30'),
(450, 11, NULL, '2020-06-26 12:43:30'),
(450, 12, NULL, '2020-06-26 12:43:30'),
(451, 1, NULL, '2020-06-26 12:44:13'),
(451, 6, NULL, '2020-06-26 12:44:13'),
(452, 1, NULL, '2020-06-26 12:44:51'),
(452, 2, NULL, '2020-06-26 12:44:51'),
(452, 5, NULL, '2020-06-26 12:44:51'),
(452, 6, NULL, '2020-06-26 12:44:51'),
(452, 7, NULL, '2020-06-26 12:44:51'),
(452, 8, NULL, '2020-06-26 12:44:51'),
(452, 9, NULL, '2020-06-26 12:44:51'),
(452, 10, NULL, '2020-06-26 12:44:51'),
(452, 11, NULL, '2020-06-26 12:44:51'),
(452, 12, NULL, '2020-06-26 12:44:51'),
(453, 1, NULL, '2020-06-26 12:45:57'),
(453, 6, NULL, '2020-06-26 12:45:57'),
(454, 1, NULL, '2020-06-26 12:48:22'),
(454, 6, NULL, '2020-06-26 12:48:22'),
(455, 8, NULL, '2020-06-26 12:49:26'),
(455, 11, NULL, '2020-06-26 12:49:26'),
(455, 12, NULL, '2020-06-26 12:49:26'),
(456, 1, NULL, '2020-06-26 12:53:13'),
(456, 2, NULL, '2020-06-26 12:53:13'),
(456, 5, NULL, '2020-06-26 12:53:13'),
(456, 6, NULL, '2020-06-26 12:53:13'),
(456, 7, NULL, '2020-06-26 12:53:13'),
(456, 8, NULL, '2020-06-26 12:53:13'),
(456, 9, NULL, '2020-06-26 12:53:13'),
(456, 10, NULL, '2020-06-26 12:53:13'),
(456, 11, NULL, '2020-06-26 12:53:13'),
(456, 12, NULL, '2020-06-26 12:53:13'),
(457, 1, NULL, '2020-06-26 12:53:16'),
(457, 2, NULL, '2020-06-26 12:53:16'),
(457, 5, NULL, '2020-06-26 12:53:16'),
(457, 6, NULL, '2020-06-26 12:53:16'),
(457, 7, NULL, '2020-06-26 12:53:16'),
(457, 8, NULL, '2020-06-26 12:53:16'),
(457, 9, NULL, '2020-06-26 12:53:16'),
(457, 10, NULL, '2020-06-26 12:53:16'),
(457, 11, NULL, '2020-06-26 12:53:16'),
(457, 12, NULL, '2020-06-26 12:53:16'),
(458, 1, NULL, '2020-06-26 12:53:19'),
(458, 2, NULL, '2020-06-26 12:53:19'),
(458, 5, NULL, '2020-06-26 12:53:19'),
(458, 6, NULL, '2020-06-26 12:53:19'),
(458, 7, NULL, '2020-06-26 12:53:19'),
(458, 8, NULL, '2020-06-26 12:53:19'),
(458, 9, NULL, '2020-06-26 12:53:19'),
(458, 10, NULL, '2020-06-26 12:53:19'),
(458, 11, NULL, '2020-06-26 12:53:19'),
(458, 12, NULL, '2020-06-26 12:53:19'),
(459, 1, NULL, '2020-06-26 12:53:21'),
(459, 2, NULL, '2020-06-26 12:53:21'),
(459, 5, NULL, '2020-06-26 12:53:21'),
(459, 6, NULL, '2020-06-26 12:53:21'),
(459, 7, NULL, '2020-06-26 12:53:21'),
(459, 8, NULL, '2020-06-26 12:53:21'),
(459, 9, NULL, '2020-06-26 12:53:21'),
(459, 10, NULL, '2020-06-26 12:53:21'),
(459, 11, NULL, '2020-06-26 12:53:21'),
(459, 12, NULL, '2020-06-26 12:53:21'),
(460, 1, NULL, '2020-06-26 12:53:23'),
(460, 2, NULL, '2020-06-26 12:53:23'),
(460, 5, NULL, '2020-06-26 12:53:23'),
(460, 6, NULL, '2020-06-26 12:53:23'),
(460, 7, NULL, '2020-06-26 12:53:23'),
(460, 8, NULL, '2020-06-26 12:53:23'),
(460, 9, NULL, '2020-06-26 12:53:23'),
(460, 10, NULL, '2020-06-26 12:53:23'),
(460, 11, NULL, '2020-06-26 12:53:23'),
(460, 12, NULL, '2020-06-26 12:53:23'),
(461, 1, NULL, '2020-06-26 12:53:25'),
(461, 2, NULL, '2020-06-26 12:53:25'),
(461, 5, NULL, '2020-06-26 12:53:25'),
(461, 6, NULL, '2020-06-26 12:53:25'),
(461, 7, NULL, '2020-06-26 12:53:25'),
(461, 8, NULL, '2020-06-26 12:53:25'),
(461, 9, NULL, '2020-06-26 12:53:25'),
(461, 10, NULL, '2020-06-26 12:53:25'),
(461, 11, NULL, '2020-06-26 12:53:25'),
(461, 12, NULL, '2020-06-26 12:53:25'),
(462, 1, NULL, '2020-09-30 08:23:12'),
(462, 2, NULL, '2020-09-30 08:23:12'),
(462, 5, NULL, '2020-09-30 08:23:12'),
(462, 6, NULL, '2020-09-30 08:23:12'),
(462, 7, NULL, '2020-09-30 08:23:12'),
(462, 8, NULL, '2020-09-30 08:23:12'),
(462, 9, NULL, '2020-09-30 08:23:12'),
(462, 10, NULL, '2020-09-30 08:23:12'),
(462, 11, NULL, '2020-09-30 08:23:12'),
(462, 12, NULL, '2020-09-30 08:23:12');

-- --------------------------------------------------------

--
-- Table structure for table `mods`
--

CREATE TABLE `mods` (
  `id` int(11) NOT NULL,
  `label` varchar(240) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mods`
--

INSERT INTO `mods` (`id`, `label`, `description`) VALUES
(1, 'Libre', '10 questions seront sélectionnées aléatoirement.'),
(2, 'Thème', 'Vous répondrez à 10 questions sur un thème que vous choisissez.');

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `name` varchar(240) NOT NULL,
  `game_played` int(11) NOT NULL,
  `current_game` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `game_played`, `current_game`) VALUES
(1, 'quentin', 0, NULL),
(4, 'qdantest', 0, NULL),
(5, 'qdan', 241, 462),
(6, 'jean', 32, 455);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `username` varchar(240) NOT NULL,
  `password` varchar(240) NOT NULL,
  `player_id` int(11) NOT NULL,
  `role` varchar(240) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `username`, `password`, `player_id`, `role`) VALUES
(7, 'qdantest', '$2b$10$3mj2tU4bb3km7KhRuggnpO8wSIapnDPiOvZmLTMEQ2Scga4Xch8Ie', 4, 'user'),
(8, 'qdan', '$2b$10$V2WBui/nEkMGAWKwZ6EdOOtw1r0xxdv5E033cb9vF0EvEMgEFrSxK', 5, 'user'),
(9, 'jean', '$2b$10$vGYYZKT.kMaQ9cyojyAFeu.yZZB1kL4yP7r5abqZ7RAQqA8qcEe4W', 6, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `label` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `label`) VALUES
(1, 'Quel temps fait-il ?'),
(2, 'Quelle est la couleur du ciel ?'),
(5, 'Le langage html est-il un langage à balise ?'),
(6, 'Que veut dire CSS ?'),
(7, 'Que veut dire DOM ?'),
(8, 'Qu\'est ce qu\'un event listener ?'),
(9, 'Le html est-il important pour le SEO ?'),
(10, 'Qu\'est ce qu\'un pseudo élément ?'),
(11, 'Quelle est la différence entre la méthode Array.map() et Array.forEach()'),
(12, 'Citez-moi un state manager en JS');

-- --------------------------------------------------------

--
-- Table structure for table `questions_has_catagories`
--

CREATE TABLE `questions_has_catagories` (
  `question_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions_has_catagories`
--

INSERT INTO `questions_has_catagories` (`question_id`, `category_id`) VALUES
(2, 1),
(5, 1),
(7, 1),
(9, 1),
(1, 2),
(6, 2),
(8, 3),
(11, 3),
(12, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_pk` (`question_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `player_pk` (`player_id`),
  ADD KEY `current_question_pk` (`current_question`);

--
-- Indexes for table `game_has_questions`
--
ALTER TABLE `game_has_questions`
  ADD UNIQUE KEY `game_id` (`game_id`,`questions_id`),
  ADD KEY `game_questions_pk` (`questions_id`);

--
-- Indexes for table `mods`
--
ALTER TABLE `mods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `player_current_game_pk` (`current_game`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `player_profile_pk` (`player_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions_has_catagories`
--
ALTER TABLE `questions_has_catagories`
  ADD PRIMARY KEY (`question_id`,`category_id`),
  ADD KEY `category_question_pk` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=463;

--
-- AUTO_INCREMENT for table `mods`
--
ALTER TABLE `mods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `question_pk` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `current_question_pk` FOREIGN KEY (`current_question`) REFERENCES `questions` (`id`),
  ADD CONSTRAINT `player_pk` FOREIGN KEY (`player_id`) REFERENCES `players` (`id`);

--
-- Constraints for table `game_has_questions`
--
ALTER TABLE `game_has_questions`
  ADD CONSTRAINT `game_pk` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  ADD CONSTRAINT `game_questions_pk` FOREIGN KEY (`questions_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `player_current_game_pk` FOREIGN KEY (`current_game`) REFERENCES `games` (`id`);

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `player_profile_pk` FOREIGN KEY (`player_id`) REFERENCES `players` (`id`);

--
-- Constraints for table `questions_has_catagories`
--
ALTER TABLE `questions_has_catagories`
  ADD CONSTRAINT `category_question_pk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `question_category_pk` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);
