USE [master]
GO
/****** Object:  Database [ITAGENTUREN]    Script Date: 22-03-2019 00:20:49 ******/
CREATE DATABASE [ITAGENTUREN]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ITAGENTUREN', FILENAME = N'C:\Users\hp\ITAGENTUREN.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ITAGENTUREN_log', FILENAME = N'C:\Users\hp\ITAGENTUREN_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ITAGENTUREN].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ITAGENTUREN] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET ARITHABORT OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ITAGENTUREN] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ITAGENTUREN] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ITAGENTUREN] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ITAGENTUREN] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ITAGENTUREN] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [ITAGENTUREN] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ITAGENTUREN] SET  MULTI_USER 
GO
ALTER DATABASE [ITAGENTUREN] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ITAGENTUREN] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ITAGENTUREN] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ITAGENTUREN] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ITAGENTUREN] SET DELAYED_DURABILITY = DISABLED 
GO
USE [ITAGENTUREN]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 22-03-2019 00:20:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserExperience]    Script Date: 22-03-2019 00:20:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserExperience](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[Language] [nvarchar](max) NULL,
	[Experience] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserExperience] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 22-03-2019 00:20:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[Gender] [nvarchar](max) NULL,
	[Dob] [datetime2](7) NOT NULL,
	[Type] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190201045509_InitialCreate', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190202144734_UserExperience', N'2.1.4-rtm-31024')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20190311174808_UserType', N'2.1.4-rtm-31024')
SET IDENTITY_INSERT [dbo].[UserExperience] ON 

INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4007, 2, N'C++', N'2-3')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4008, 2, N'C#', N'4-6')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4009, 2, N'CSS', N'2-3')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4010, 2, N'JAVA', N'0-1')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4023, 6, N'C', N'0-1')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4024, 6, N'C++', N'0-1')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4025, 6, N'C#', N'7+')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4026, 6, N'CSS', N'2-3')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4027, 6, N'JAVA', N'4-6')
INSERT [dbo].[UserExperience] ([Id], [UserId], [Language], [Experience]) VALUES (4028, 6, N'Javascript', N'0-1')
SET IDENTITY_INSERT [dbo].[UserExperience] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [Password], [Gender], [Dob], [Type]) VALUES (1, N'San', N'Ban', N'bogus@gmail.com', N'Password1234', N'male', CAST(N'2019-02-01 10:31:09.8000000' AS DateTime2), NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [Password], [Gender], [Dob], [Type]) VALUES (2, N'Moulik', N'Bansall', N'User1@gmail.com', N'Password123', N'male', CAST(N'2005-03-03 00:00:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [Password], [Gender], [Dob], [Type]) VALUES (3, N'Mahin', N'Bansal', N'User2@gmail.co', N'Password123', N'male', CAST(N'2019-01-23 18:30:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [Password], [Gender], [Dob], [Type]) VALUES (4, N'Kanishk', N'Bansal', N'User1@gmail.com', N'Password123', N'male', CAST(N'2018-12-23 18:30:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [Password], [Gender], [Dob], [Type]) VALUES (5, N'Monik', N'Bansal', N'User1@gmail.com', N'Password123', N'male', CAST(N'2019-01-24 00:00:00.0000000' AS DateTime2), NULL)
INSERT [dbo].[Users] ([Id], [FirstName], [LastName], [Email], [Password], [Gender], [Dob], [Type]) VALUES (6, N'Aarav', N'Garg', N'User11@gmail.com', N'Password123', N'male', CAST(N'2016-03-18 00:00:00.0000000' AS DateTime2), N'Consultancy')
SET IDENTITY_INSERT [dbo].[Users] OFF
USE [master]
GO
ALTER DATABASE [ITAGENTUREN] SET  READ_WRITE 
GO
