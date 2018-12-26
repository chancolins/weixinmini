/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.6.30 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `t_config` */

DROP TABLE IF EXISTS `t_config`;

CREATE TABLE `t_config` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `app_name` varchar(32) DEFAULT NULL COMMENT '小程序名称',
  `appid` varchar(64) NOT NULL COMMENT '小程序appid',
  `secret` varchar(64) NOT NULL COMMENT '小程序appsecret',
  `access_token` varchar(64) DEFAULT NULL COMMENT 'access_token',
  `expire_time` datetime DEFAULT NULL COMMENT 'access_token过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='小程序配置表';

/*Data for the table `t_config` */

/*Table structure for table `t_vote` */

DROP TABLE IF EXISTS `t_vote`;

CREATE TABLE `t_vote` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `title` varchar(64) NOT NULL COMMENT '投票标题',
  `single_select` tinyint(1) NOT NULL COMMENT '是否单选？ 0：多选，1：单选',
  `openid` varchar(64) DEFAULT NULL COMMENT '创建者',
  `unionid` varchar(64) DEFAULT NULL COMMENT '统一id',
  `qr_code` varchar(128) DEFAULT NULL COMMENT '二维码图片url',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投票主题表';

/*Data for the table `t_vote` */

/*Table structure for table `t_vote_item` */

DROP TABLE IF EXISTS `t_vote_item`;

CREATE TABLE `t_vote_item` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `vote_id` bigint(11) NOT NULL COMMENT '投票id',
  `item` varchar(128) NOT NULL COMMENT '投票选项',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投票选项表';

/*Data for the table `t_vote_item` */

/*Table structure for table `t_vote_result` */

DROP TABLE IF EXISTS `t_vote_result`;

CREATE TABLE `t_vote_result` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `openid` varchar(64) NOT NULL COMMENT '投票人',
  `unionid` varchar(64) DEFAULT NULL COMMENT '投票人统一id',
  `vote_id` bigint(11) NOT NULL COMMENT '投票id',
  `vote_item_id` bigint(11) NOT NULL COMMENT '投票选项id',
  `create_time` datetime NOT NULL COMMENT '投票时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投票结果表，多选就有多条记录';

/*Data for the table `t_vote_result` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
