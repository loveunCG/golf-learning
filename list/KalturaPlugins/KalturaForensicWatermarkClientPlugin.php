<?php
// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2018  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

/**
 * @package Kaltura
 * @subpackage Client
 */
require_once(dirname(__FILE__) . "/../KalturaClientBase.php");
require_once(dirname(__FILE__) . "/../KalturaEnums.php");
require_once(dirname(__FILE__) . "/../KalturaTypes.php");

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaDeliveryProfileForensicWatermark extends KalturaDeliveryProfile
{
	/**
	 * The URL used to pull manifest from the server, keyed by dc id, asterisk means all dcs
	 *
	 * @var array of KalturaKeyValue
	 */
	public $internalUrl;

	/**
	 * The key used to encrypt the URI (256 bits)
	 *
	 * @var string
	 */
	public $encryptionKey = null;

	/**
	 * The iv used to encrypt the URI (128 bits)
	 *
	 * @var string
	 */
	public $encryptionIv = null;

	/**
	 * The regex used to match the encrypted part of the URI (according to the 'encrypt' named group)
	 *
	 * @var string
	 */
	public $encryptionRegex = null;


}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaForensicWatermarkAdvancedFilter extends KalturaSearchItem
{
	/**
	 * 
	 *
	 * @var int
	 */
	public $watermarkId = null;


}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaForensicWatermarkClientPlugin extends KalturaClientPlugin
{
	protected function __construct(KalturaClient $client)
	{
		parent::__construct($client);
	}

	/**
	 * @return KalturaForensicWatermarkClientPlugin
	 */
	public static function get(KalturaClient $client)
	{
		return new KalturaForensicWatermarkClientPlugin($client);
	}

	/**
	 * @return array<KalturaServiceBase>
	 */
	public function getServices()
	{
		$services = array(
		);
		return $services;
	}

	/**
	 * @return string
	 */
	public function getName()
	{
		return 'forensicWatermark';
	}
}

