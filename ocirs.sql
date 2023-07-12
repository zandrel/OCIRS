-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2023 at 06:13 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ocirs`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `anno_id` int(11) NOT NULL,
  `anno_title` varchar(500) NOT NULL,
  `anno_descrip` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`anno_id`, `anno_title`, `anno_descrip`) VALUES
(1, 'Notice of Scheduled System Maintenance1', 'Please be advised that there will be scheduled downtime across our network from February 08, 2022 10:00 PM to February 09, 2022 2:00 AM. This is because we are performing work on parts of the network. As a result, you may experience problems accessing the system during this time We apologize for any inconvenience. For more information, or if you have any questions, please contact the IT Team at 09895673546 or the PNP Station at 0934726384'),
(2, 'supot joey', 'Due to the numerous number of calls that we have received, the City Government of Tuguegarao leaves it to the heads of agencies to assess, determine, and recommend for the suspension of work in their respective jurisdiction. The City Government is working together with all the concerned national and local agencies to ensure the safety of the public. Hospitals, clinics, and other offices and agencies providing basic public utilities are advised to continue their usual work.'),
(3, 'Notice to the P', 'To avoid further vehicular accidents in the area, please be informed that the Overflow Bridge is TEMPORARILY CLOSED as it is still covered with mud. This is for the safety of all motorists. Thank you for understanding.');

-- --------------------------------------------------------

--
-- Table structure for table `brgycharts`
--

CREATE TABLE `brgycharts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `barangay` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totalcrimes` int(11) NOT NULL,
  `totalincidents` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brgycharts`
--

INSERT INTO `brgycharts` (`id`, `barangay`, `totalcrimes`, `totalincidents`, `created_at`, `updated_at`) VALUES
(1, 'ugac sur', 20, 12, NULL, NULL),
(2, 'ugac norte', 92, 52, NULL, NULL),
(3, 'centro 1', 82, 4, NULL, NULL),
(4, 'centro 2', 12, 30, NULL, NULL),
(5, 'Annafunan East', 5, 79, NULL, NULL),
(6, 'Annafunan West', 5, 54, NULL, NULL),
(7, 'Atulayan Norte', 14, 23, NULL, NULL),
(8, 'Atulayan Sur', 42, 12, NULL, NULL),
(9, 'Bagay', 52, 13, NULL, NULL),
(10, 'Buntun', 24, 15, NULL, NULL),
(11, 'Caggay', 23, 16, NULL, NULL),
(12, 'Capatan', 12, 72, NULL, NULL),
(13, 'Carig', 23, 15, NULL, NULL),
(14, 'Caritan Centro', 43, 12, NULL, NULL),
(15, 'Caritan Norte', 13, 11, NULL, NULL),
(16, 'Caritan Sur', 23, 5, NULL, NULL),
(17, 'Cataggaman Nuevo', 23, 31, NULL, NULL),
(18, 'Cataggaman Pardo', 43, 28, NULL, NULL),
(19, 'Cataggaman Viejo', 54, 56, NULL, NULL),
(20, 'Centro 10', 45, 11, NULL, NULL),
(21, 'Centro 11', 34, 12, NULL, NULL),
(22, 'Centro 12', 34, 13, NULL, NULL),
(23, 'Centro 3', 34, 14, NULL, NULL),
(24, 'Centro 4', 45, 15, NULL, NULL),
(25, 'Centro 5', 34, 16, NULL, NULL),
(29, 'Centro 7', 23, 23, NULL, NULL),
(31, 'Centro 6', 23, 24, NULL, NULL),
(32, 'Centro 8', 23, 25, NULL, NULL),
(33, 'Centro 9', 12, 26, NULL, NULL),
(34, 'Dadda', 23, 27, NULL, NULL),
(35, 'Gosi Norte', 23, 98, NULL, NULL),
(36, 'Larion Alto', 12, 12, NULL, NULL),
(37, 'Larion Bajo', 23, 25, NULL, NULL),
(38, 'Leonarda', 23, 16, NULL, NULL),
(39, 'Libag Norte', 42, 26, NULL, NULL),
(40, 'Libag Sur', 23, 27, NULL, NULL),
(41, 'Linao East', 23, 8, NULL, NULL),
(42, 'Linao Norte', 23, 38, NULL, NULL),
(43, 'Linao West', 32, 89, NULL, NULL),
(44, 'Nambbalan Norte', 42, 12, NULL, NULL),
(45, 'Nambbalan Sur', 24, 32, NULL, NULL),
(46, 'Pallua Norte', 23, 31, NULL, NULL),
(47, 'Pallua Sur', 51, 44, NULL, NULL),
(48, 'Pengue', 15, 51, NULL, NULL),
(49, 'Reyes', 41, 31, NULL, NULL),
(50, 'San Gabriel', 51, 15, NULL, NULL),
(51, 'Tagga', 51, 12, NULL, NULL),
(52, 'Tanza', 51, 11, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chart`
--

CREATE TABLE `chart` (
  `month` varchar(15) NOT NULL,
  `totalcrime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chart`
--

INSERT INTO `chart` (`month`, `totalcrime`) VALUES
('january', 12),
('february', 24),
('march', 50),
('april', 70),
('may', 30),
('june', 80),
('july', 76),
('august', 40),
('september', 55),
('october', 48),
('november', 66),
('december', 88);

-- --------------------------------------------------------

--
-- Table structure for table `ch_favorites`
--

CREATE TABLE `ch_favorites` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `favorite_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ch_messages`
--

CREATE TABLE `ch_messages` (
  `id` bigint(20) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_id` bigint(20) NOT NULL,
  `to_id` bigint(20) NOT NULL,
  `body` varchar(5000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attachment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ch_messages`
--

INSERT INTO `ch_messages` (`id`, `type`, `from_id`, `to_id`, `body`, `attachment`, `seen`, `created_at`, `updated_at`) VALUES
(1704144433, 'user', 48, 41, 'di pa', NULL, 1, '2022-12-16 03:28:10', '2022-12-16 03:28:12'),
(1783678651, 'user', 41, 48, 'kumain ka na?', NULL, 1, '2022-12-16 03:28:06', '2022-12-16 03:28:07'),
(1833377069, 'user', 24, 3, '', '{\"new_name\":\"b729f0ef-ddf6-4365-b5b0-1e3b1c37d9bc.png\",\"old_name\":\"COLOR-PALLETE.png\"}', 0, '2022-12-10 08:17:58', '2022-12-10 08:17:58'),
(1888381443, 'user', 41, 48, 'gughugh', NULL, 1, '2022-12-16 03:30:39', '2022-12-16 03:31:30'),
(1906811569, 'user', 41, 48, 'hgjh', NULL, 1, '2022-12-16 03:31:02', '2022-12-16 03:31:30'),
(1975557533, 'user', 2, 3, '', '{\"new_name\":\"139b201b-4081-4197-94be-2944d8364a2f.png\",\"old_name\":\"unknown.png\"}', 0, '2022-11-01 06:50:13', '2022-11-01 06:50:13'),
(1995342387, 'user', 48, 41, 'hi', NULL, 1, '2022-12-16 03:26:41', '2022-12-16 03:27:43'),
(2002277604, 'user', 38, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', NULL, 1, '2022-12-13 02:35:54', '2022-12-13 02:36:05'),
(2070228173, 'user', 22, 3, 'asdasdasdas', NULL, 1, '2022-12-08 05:56:02', '2022-12-08 05:56:02'),
(2144532227, 'user', 48, 41, 'asd', NULL, 0, '2022-12-16 03:31:42', '2022-12-16 03:31:42'),
(2343806341, 'user', 41, 48, 'hgughu', NULL, 1, '2022-12-16 03:30:41', '2022-12-16 03:31:30'),
(2482174100, 'user', 2, 3, '', '{\"new_name\":\"ec10cb3d-d59f-4e05-9896-ab4f05f49e16.jpg\",\"old_name\":\"dog-puppy-on-garden-royalty-free-image-1586966191.jpg\"}', 0, '2022-11-01 06:53:55', '2022-11-01 06:53:55'),
(2598188699, 'user', 41, 48, 'hello', NULL, 1, '2022-12-16 03:27:48', '2022-12-16 03:27:51'),
(2603608536, 'user', 48, 41, '', '{\"new_name\":\"5603a9a8-df13-4c96-b01c-7b8f4f15eaa7.png\",\"old_name\":\"news1.png\"}', 1, '2022-12-16 03:26:51', '2022-12-16 03:27:43');

-- --------------------------------------------------------

--
-- Table structure for table `emergencies`
--

CREATE TABLE `emergencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `emergencyType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contactNumber` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `landmark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emergencyDetails` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `faq_question` varchar(700) NOT NULL,
  `faq_answer` varchar(700) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `faq_question`, `faq_answer`) VALUES
(1, 'In which language should the report be submitted?', 'The report should be submitted in any of the two, English or Filipino language.?'),
(2, 'What should be done to ensure that entered data are not lost?', 'Make sure to click the submit button before closing the system.'),
(3, 'How would I know the statusasd of my report?', 'On your user’s dashboard you can see the status of your report on report log section below the search bar.sad'),
(6, 'In which language should the report be submitted?asd', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(55, '2014_10_12_000000_create_users_table', 1),
(56, '2014_10_12_100000_create_password_resets_table', 1),
(57, '2019_08_19_000000_create_failed_jobs_table', 1),
(58, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(59, '2022_08_30_155314_create_emergencies_table', 1),
(60, '2022_09_06_081213_create_reports_table', 1),
(61, '2022_10_25_999999_add_active_status_to_users', 1),
(62, '2022_10_25_999999_add_avatar_to_users', 1),
(63, '2022_10_25_999999_add_dark_mode_to_users', 1),
(64, '2022_10_25_999999_add_messenger_color_to_users', 1),
(65, '2022_10_25_999999_create_favorites_table', 1),
(66, '2022_10_25_999999_create_messages_table', 1),
(67, '2022_11_26_061004_create_verify_users_table', 2),
(69, '2023_01_20_153108_create_notifications_table', 3),
(70, '2022_10_24_999999_add_dark_mode_to_users', 4),
(71, '2023_01_20_153347_create_notifications_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `newsTitle` varchar(500) NOT NULL,
  `newsDescrip` varchar(500) NOT NULL,
  `media` varchar(244) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `newsTitle`, `newsDescrip`, `media`) VALUES
(1, 'Masusing pagsusuri sa mga ebidensya, tiniyak ng Tuguegarao City Forensic Unit', 'Mas pinalakas pa ng PNP Forensic Unit na dating kilalang Crime Laboratory (CrimeLab) ang kakayahan nito sa pagsasagawa ng teknikal na imbestigasyon sa mga krimen sa pamamagitan nang patuloy na pagsasagawa ng mga pagsasanay sa kanilang mga personnel sa ibat-ibang expertise. Sinabi ni PMAJ James Bade, officer-in-charge ng Tuguegarao City Forensic Unit na masusing sinasanay sa pagsasagawa ng forensic examinations ang mga forensic specialists.', 'news1.png'),
(2, 'School Clerk, Timbog Sa Drug Buy Bust Operation Sa Tuguegarao City', 'Timbog sa ikinasang drug buy bust operation ang isang school clerk ng isang kilalang paaralan sa Lungsod ng Tuguegarao. Batay sa inilabas na datos ng Cagayan Police Provincial Office (CPPO), nahuli ang suspek na kinilalang si Jaymor Callo, 36 na taong gulang at isang empleyado ng Cagayan National High School. Nadakip kahapon, Hulyo 19, ang suspek ng mga pinagsamang operatiba ng CPPO, Provincial Drug Enforcement Unit, Provincial Intel Unit at PNP Tuguegarao City.', 'news2.png'),
(3, 'Personnel of Tuguegarao City Police Station, Cagayan Police Provincial Office conducted Oplan VISA/Sita', 'IN PHOTOS: Personnel of Tuguegarao City Police Station, Cagayan Police Provincial Office led by PLTCOL EDITH D NARAG, ACOP, conducted Oplan VISA/Sita,  conducted Oplan VISA/Sita Road Clearing and police visibility to preempt the occurrence of crime within Area Of conducted Oplan VISA/SitaResponsibility. Likewise, strictly implemented OPLAN FASOC MO (Face Mask, Alcohol, Social Distancing, Curfew and Limit Movement) in relation to Alert Level 1 protocols and guidelines.', 'news3.png');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(255) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `title`, `message`, `read_at`, `created_at`, `updated_at`, `read`) VALUES
(137, 41, 'New Report Submitted', 'A new report has been submitted by user ZOEI1', NULL, '2023-01-26 05:00:55', '2023-01-26 05:00:55', 0);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('zandrel.riversa@gmail.com', 'B5HukNoseilYc6cHCKhSNvGffg6V2wneqzbTa0vgqyzi3XVwShRgbiX8PIXblZ6X', '2022-11-27 05:58:14'),
('jcawtindoy@yahoo.com', 'Ec5bVZU3RhbmZ94BDzsS8eNmGAZ3loeGdX0XhG8Ao00o8sFol0W8QayNDXtLSxr2', '2022-12-12 08:20:45'),
('za2ndrel.rivera@gmail.com', 'Ikt9bAUHvLZBaUbuw45pp0wvTuysADVHWk28G1b2A7qnCtsONMHhu96hC8oCnQby', '2022-12-12 23:59:40');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `narrative` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `report_id` int(10) NOT NULL,
  `repoort_brgy` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reportType` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `media` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reportstatus` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `report_archive_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'No',
  `irf_entry` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blotter_entry` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `copy_for` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susfname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susmname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suslname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susqualifier` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susnickname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suscitizenship` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sussex` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suscivilstatus` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susbirth` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susage` int(255) DEFAULT NULL,
  `susplaceofbirth` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sushomephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susmobilephone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susstreet` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susbarangay` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susmunicipality` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susprovince` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susstreet2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susbarangay2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susmunicipality2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susprovince2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sushighesteduc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susoccupation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suswordaddress` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susrelationtovictim` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susemail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susifrank` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susunitassignment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susgroup` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suscrimerecord` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susspecifyrecord` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susstatusrecord` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susheight` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susweight` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susbuild` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `suscoloreyes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susdescripeyes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susdescriphair` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `susinfluence` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chilguardian` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chilguardianaddress` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chilhomephone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chilmobilephone` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicfname` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicmname` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `viclnam` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicqualifier` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicnickname` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `viccitizenship` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicsex` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `viccivilstat` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicbirth` date DEFAULT NULL,
  `vicage` varchar(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicplaceofbirth` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vichomephone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicmobilephone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicstreet` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicbarangay` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicmunicipality` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicprovince` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicstreet2` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicbarangay2` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicmunicipality2` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicprovince2` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `administering_officer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `administering_officer_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deskofficer_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deskofficer_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `investigator_on_case` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `investigator_on_case_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chief_of_head` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chief_of_head_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sussitio` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sussitio2` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicsitio` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vicsitio2` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `narrative`, `report_id`, `repoort_brgy`, `reportType`, `date`, `time`, `location`, `media`, `reportstatus`, `report_archive_status`, `irf_entry`, `blotter_entry`, `copy_for`, `susfname`, `susmname`, `suslname`, `susqualifier`, `susnickname`, `suscitizenship`, `sussex`, `suscivilstatus`, `susbirth`, `susage`, `susplaceofbirth`, `sushomephone`, `susmobilephone`, `susstreet`, `susbarangay`, `susmunicipality`, `susprovince`, `susstreet2`, `susbarangay2`, `susmunicipality2`, `susprovince2`, `sushighesteduc`, `susoccupation`, `suswordaddress`, `susrelationtovictim`, `susemail`, `susifrank`, `susunitassignment`, `susgroup`, `suscrimerecord`, `susspecifyrecord`, `susstatusrecord`, `susheight`, `susweight`, `susbuild`, `suscoloreyes`, `susdescripeyes`, `susdescriphair`, `susinfluence`, `chilguardian`, `chilguardianaddress`, `chilhomephone`, `chilmobilephone`, `vicfname`, `vicmname`, `viclnam`, `vicqualifier`, `vicnickname`, `viccitizenship`, `vicsex`, `viccivilstat`, `vicbirth`, `vicage`, `vicplaceofbirth`, `vichomephone`, `vicmobilephone`, `vicstreet`, `vicbarangay`, `vicmunicipality`, `vicprovince`, `vicstreet2`, `vicbarangay2`, `vicmunicipality2`, `vicprovince2`, `administering_officer`, `administering_officer_phone`, `deskofficer_name`, `deskofficer_phone`, `investigator_on_case`, `investigator_on_case_phone`, `chief_of_head`, `chief_of_head_phone`, `sussitio`, `sussitio2`, `vicsitio`, `vicsitio2`, `created_at`, `updated_at`) VALUES
('1OCs3U', 'tttt', 46, 'Leonarda', 'Crime', '2023-01-17', '17:43', 'tt', NULL, 'Processing', 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-24 09:40:31', NULL),
('2nty1G', 'tttt', 46, 'Carig Sur', 'Incident', '2023-01-18', '21:41', 'JP7G+7RC, Tuguegarao, Cagayan, Philippines', NULL, 'Unresolved', 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-03-25 13:37:40', NULL),
('BkoFLd', 'sadasd', 45, 'Centro 1', 'Crime', '2023-01-25', '17:00', 'Rizal Avenue (Near Municipal City Of San Fernando), San Fernando City, 2500, La Union, San Fernando, La Union, Philippines', NULL, 'Dispatched', 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-26 05:00:55', NULL),
('oOFKn6', 'tttt', 46, 'Tanza', 'Incident', '2023-01-17', '17:43', 'tt', NULL, 'Unresolved', 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-24 10:21:01', NULL),
('oqGamX', 'ttt', 46, 'Carig Norte', 'Crime', '2023-01-19', '21:36', 'ttt', NULL, 'Processing', 'No', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-01-25 13:36:23', NULL),
('OWhdRY', 'hit and run tapos tumakbo', 48, 'Annafunan East', 'Crime', '2022-12-16', '11:11', 'JP7G+RX9, Tuguegarao, Cagayan, Philippines', 'toyota-vios.jpg', 'Resolved', 'No', NULL, '1', NULL, 'john', 'a', 'doe', 'jr', 'raul', 'filipino', 'Male', 'Single', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jonathan', 'a', 'pasoos', 'sr', 'pasos', NULL, NULL, NULL, NULL, '23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'raphael quizon', '123456', 'Colonel', NULL, 'Richard Pineda', '09758261969', 'Zandrel Catindoy', '09353181225', NULL, NULL, NULL, NULL, '2023-12-16 03:23:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(8) NOT NULL,
  `last_login_time` datetime DEFAULT NULL,
  `isGuest` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No',
  `fName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `civilStatus` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `region` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `province` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `province2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `municipality` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `municipality2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barangay` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sitio` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sitio2` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barangay2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qualifier` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `occupation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `highesteduc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `acct_status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `acct_archive_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'No',
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placeofbirth` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `homephone` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `citizenship` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Age` int(3) DEFAULT NULL,
  `email_verified` int(11) NOT NULL DEFAULT 0,
  `mobileNum` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active_status` tinyint(1) NOT NULL DEFAULT 0,
  `validID` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selfieValidID` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_type` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'avatar.png',
  `dark_mode` tinyint(1) NOT NULL DEFAULT 0,
  `messenger_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '#2180f3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `last_login_time`, `isGuest`, `fName`, `mName`, `lName`, `sex`, `birthDate`, `civilStatus`, `street`, `street2`, `region`, `province`, `province2`, `municipality`, `municipality2`, `barangay`, `sitio`, `sitio2`, `barangay2`, `qualifier`, `nickname`, `occupation`, `highesteduc`, `acct_status`, `acct_archive_status`, `username`, `password`, `email`, `placeofbirth`, `homephone`, `citizenship`, `Age`, `email_verified`, `mobileNum`, `profile`, `role`, `remember_token`, `active_status`, `validID`, `selfieValidID`, `id_type`, `avatar`, `dark_mode`, `messenger_color`) VALUES
(41, NULL, 'No', 'ADMIN', NULL, 'ADMIN', 'MALE', '2014-06-13', 'SINGLE', 'ADMIN', NULL, 'REGION XII (SOCCSKSARGEN)', 'COTABATO (NORTH COTABATO)', NULL, 'PIKIT', NULL, 'Gokoton (Gokotan)', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Verified', 'No', 'admin', '$2y$10$FJ2XmEUBH/oJPJNOiVoWx.r/vqrGRKAdTTaQ7qUXe2/Bqvp2cnAxC', 'admin@gmail.com', NULL, NULL, NULL, NULL, 1, '09876423423', NULL, 1, NULL, 0, 'postal-ID-card.jpg', 'photo-id.jpg', 'Passport', 'avatar.png', 0, '#2180f3'),
(45, '2023-01-26 13:00:33', 'No', 'ZOEI1', 'RIVERAa', 'CATINDOY', 'Female', '2017-03-15', 'Married', '123', NULL, 'REGION XI (DAVAO REGION)', 'COMPOSTELA VALLEY', NULL, 'MONKAYO', NULL, 'Salvacion', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Verified', 'No', 'zoei', '$2y$10$QI6HcsWov5/G0trVVn6DJeB6jfQVqL.na1mRy6AsVur5PwS3rjjIe', 'ze@yahoo.com', NULL, NULL, NULL, NULL, 1, '09812423423', NULL, 0, NULL, 0, 'ID.jpg', 'SELFIE.jpg', 'Passport', 'avatar.png', 0, '#2180f3'),
(46, '2023-01-25 22:54:09', 'No', 'JUAN', NULL, 'DELACRUZ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Verified', 'No', 'juan', '$2y$10$d0Hh8sqVhuAEzvXtDWPSJuFQtr.ZZ1W2UhSCzMckL0Iek2vz8fc2u', NULL, NULL, NULL, NULL, NULL, 1, '09876113423', NULL, 0, NULL, 0, 'ID.jpg', 'SELFIE.jpg', NULL, 'avatar.png', 0, '#2180f3'),
(48, '2022-12-16 11:20:31', 'No', 'GABRIEL', NULL, 'PUA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'san juan', NULL, NULL, NULL, NULL, 'Verified', 'No', 'gabriel', '$2y$10$hF2IcT147/F8OIiaS6/aOu6aXtADNUUe4oq6wbf7LDJku.s56f2V2', NULL, NULL, NULL, NULL, NULL, 1, '09758261969', NULL, 0, NULL, 0, 'ID.jpg', 'SELFIE.jpg', NULL, '68af0470-a80e-4e8d-b7b6-d0b484ef4fc4.png', 1, '#2180f3'),
(49, '2023-01-25 22:54:24', 'No', 'JOEYarr', NULL, 'SUPOT', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Verified', 'No', 'joey69', '$2y$10$awZeAD5PmLtQdO5tVzCJyeldl4KWtxypl73TmmGb8cTdIqqSoP1Le', NULL, NULL, NULL, NULL, NULL, 1, '09678926272', NULL, 0, NULL, 0, 'signature.png', 'signature.png', NULL, 'avatar.png', 0, '#2180f3');

-- --------------------------------------------------------

--
-- Table structure for table `verify_users`
--

CREATE TABLE `verify_users` (
  `user_id` int(8) NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `verify_users`
--

INSERT INTO `verify_users` (`user_id`, `token`, `created_at`, `updated_at`) VALUES
(7, '7c3c0491679de13c5e4639da966692cfca63b13f704c796149c4a1e2d20239ef1', '2022-11-26 02:06:56', '2022-11-26 02:06:56'),
(8, '8a65ad9db789ed77b3dcf0f0fed2bc44fd1db7241bac4ab7c5c610f1323fdae40', '2022-11-27 07:24:24', '2022-11-27 07:24:24'),
(9, '93be1528e6716762d9ce481c31929c02143d3c4a61babb9dd17f646d43b5a4f2f', '2022-11-27 07:28:17', '2022-11-27 07:28:17'),
(10, '100aa49eb414b9e69e9247f2ac52f3b76e9784314e2087a89c46a392768bb41fb4', '2022-11-27 07:31:24', '2022-11-27 07:31:24'),
(11, '112a25974ddd3858ac17fbd1ab5886f074ecea73292d2127c7d2330773bda326aa', '2022-11-27 07:32:57', '2022-11-27 07:32:57'),
(12, '12bfec737853ad8e056ff7eb1113143b9042fc8d71c0af2da07243e60276019c95', '2022-11-27 07:38:56', '2022-11-27 07:38:56'),
(13, '13700e0e8c38a6ffaa5c7f38f3701ba4f812d5b3dfae25806125d79ce0ab2f07a8', '2022-11-30 02:21:07', '2022-11-30 02:21:07'),
(14, '14eb18f2e967ad9fc3d99c1bea0a669fa63c0b4b84900b7458ce2449c4e8c57cf2', '2022-11-30 03:47:40', '2022-11-30 03:47:40'),
(17, '17325de107f583362b034486e95963ac175461964fb2066b281d3407a0dbcd60e3', '2022-12-06 00:29:19', '2022-12-06 00:29:19'),
(18, '180f0ce317a841e0ea65373d88e81a72ed8d98b9e4067f99a63f44011a34b7d292', '2022-12-06 00:56:00', '2022-12-06 00:56:00'),
(22, '222108282525c4ec6339691aa6b0d840e6459bbc2e3068cbd2dd13818f15acc9d3', '2022-12-07 03:00:23', '2022-12-07 03:00:23'),
(23, '2320643dbc7e52581723e3455b2d3023c0628c2fbeac612d8acf9055df85168e04', '2022-12-07 07:40:50', '2022-12-07 07:40:50'),
(24, '246735e896ed4e83709e48bc187a4fdb28e1b421b4a6ce02b2eac3f3e595bad3c8', '2022-12-08 07:53:55', '2022-12-08 07:53:55'),
(27, '27c8cc64af5206a6da2173b1c592f7d18ec44150e07e2758b055512fb3f02379ff', '2022-12-10 22:58:47', '2022-12-10 22:58:47'),
(38, '38085172e502ef98fd995e67cedd247c4bdb748d4b9869ad2ca220eef3523648f5', '2022-12-12 07:28:18', '2022-12-12 07:28:18'),
(39, '3962ff39c76d3d2541940c548239d9ada636391d981b4d6004d762e58e6d3d5554', '2022-12-13 02:54:18', '2022-12-13 02:54:18'),
(41, '41ceaab67ca379f792d173ed55bdf4e809646c75b7d8bb9bd8fb068f667bb14db5', '2022-12-15 07:52:01', '2022-12-15 07:52:01'),
(0, '0b5e3a72758abe8289b20874b116f9dcb88f9503b251c5fb60747c673123054a5', '2022-12-15 08:16:35', '2022-12-15 08:16:35'),
(0, '0bde3314fb9c090aa91d813c5870dc1e3ee8c707a1f11b41011957c4ce200209c', '2022-12-15 08:19:24', '2022-12-15 08:19:24'),
(0, '0225bdee6d29c3be173b865e116ea6dc8a6f0ab0d5c98b52b59f3fec11a4a596b', '2022-12-15 08:22:21', '2022-12-15 08:22:21'),
(44, '44ca550c369d7455e0fd95369818daf58cb46b77238d523d2bcb80e99a9d4af95a', '2022-12-15 08:29:20', '2022-12-15 08:29:20'),
(45, '45a7d5853b05a22ae62e62f600ec13a573b654b5359c47a20a2709de478f67100b', '2022-12-15 08:35:21', '2022-12-15 08:35:21'),
(46, '4663688aa8df1d2ce84a9a23737c0303c596296e95244c7e37d229918cf63e030e', '2022-12-15 08:49:03', '2022-12-15 08:49:03'),
(48, '4851dbacdc98582f0eaa6d3fad40dd2bbffb7162935313b92471bfb5903fba4ca8', '2022-12-16 03:17:05', '2022-12-16 03:17:05'),
(49, '4961b666e05a8cf05fe7067f568295c198997e16f9a589cd3fd4c8a5bddbd5f706', '2023-01-24 19:24:13', '2023-01-24 19:24:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`anno_id`);

--
-- Indexes for table `brgycharts`
--
ALTER TABLE `brgycharts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ch_favorites`
--
ALTER TABLE `ch_favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ch_messages`
--
ALTER TABLE `ch_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emergencies`
--
ALTER TABLE `emergencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_id` (`report_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `anno_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brgycharts`
--
ALTER TABLE `brgycharts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `emergencies`
--
ALTER TABLE `emergencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`report_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
